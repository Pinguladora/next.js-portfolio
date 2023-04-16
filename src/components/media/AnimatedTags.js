import { motion } from 'framer-motion'

export const AnimatedAnchor = ({ href, icon, target = "{_blank}", className = "" }) => {
    return (
        <motion.a href={href} target={target} className={`${className}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            {icon}
        </motion.a>
    )
}

export const AnimatedIconButton = ({ onClick, icon, className = "" }) => {
    return (
        <motion.button onClick={onClick} className={`${className}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            {icon}
        </motion.button>
    )
}

