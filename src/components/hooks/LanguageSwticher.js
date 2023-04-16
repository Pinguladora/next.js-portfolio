import React, { useState, useEffect, useRef } from 'react';
import { useRouter, withRouter } from 'next/router';
import { Trans } from '@lingui/react';
import { SpainFlag, UnitedKingdomFlag, FranceFlag } from '../media/Icons';
import { AnimatedIconButton } from '../media/AnimatedTags';

const LANGUAGES = {
    es: <Trans id="lang-spanish" />,
    en: <Trans id="lang-english" />,
    fr: <Trans id="lang-french" />,
};

const LANGUAGES_ICONS = {
    es: SpainFlag,
    en: UnitedKingdomFlag,
    fr: FranceFlag,
};

// Add a new language and icon for non-production environment
if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    LANGUAGES['pseudo'] = <Trans id="lang-pseudo" />;
    LANGUAGES_ICONS['pseudo'] = UnitedKingdomFlag;
}


const LanguageSwitcher = ({ className }) => {
    const router = useRouter();

    const [locale, setLocale] = useState(router.locale.split('-')[0]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        if (router.locale.split('-')[0] !== locale) {
            router.push(router.pathname, router.pathname, { locale });
        }
    }, [locale, router]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLanguageChange = (langKey) => {
        setDropdownVisible(false);
        setLocale(langKey);
    };

    const renderDropdownItems = () =>
        Object.entries(LANGUAGES).map(([langKey, langName], index) => {
            const IconComponent = LANGUAGES_ICONS[langKey];

            return (
                <a
                    key={index}
                    className="flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100
                     dark:hover:text-white dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={(evt) => {
                        evt.preventDefault();
                        handleLanguageChange(langKey);
                    }}
                >
                    <IconComponent className="h-6 w-auto mr-2" />
                    <span className="flex flex-col">
                        <span>{langName}</span>
                    </span>
                </a>
            );
        });

    const CurrentIcon = LANGUAGES_ICONS[locale];

    return (
        <div className={`${className}`} ref={dropdownRef}>
            <AnimatedIconButton
                id="lang-menu"
                onClick={toggleDropdown}
                icon={<CurrentIcon />}
            />

            {dropdownVisible && (
                <div className="absolute w-auto max-h-[120px] mt-6 overflow-auto origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 no-scrollbar">
                    <div
                        className="divide-y divide-gray-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="lang-menu"
                    >
                        {renderDropdownItems()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default withRouter(LanguageSwitcher);
