import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { navItems } from '@/utils/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const isScrolled = useScrollPosition(48);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => setIsOpen(false);

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ x: '-50%', y: -24, opacity: 0 }}
      animate={{ x: '-50%', y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className={styles.logo} href="#hero" onClick={closeMenu} aria-label="На первый экран">
        R<span>&</span>A
      </a>

      <nav className={`${styles.links} ${isOpen ? styles.open : ''}`} aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </motion.header>
  );
};
