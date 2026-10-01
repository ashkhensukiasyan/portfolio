import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import '../Hero.css';

const Hero = () => {
    const words = ['Full Stack Developer', 'UI/UX Enthusiast', 'React Lover'];
    const [currentWord, setCurrentWord] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWord];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && text.length < word.length) {
            timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 100);
        } else if (!deleting && text.length === word.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 50);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setCurrentWord((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, currentWord]);

    // Mouse tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 20);
        y.set((e.clientY - rect.top - rect.height / 2) / 20);
    };

    const particles = useMemo(() =>
        [...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        })),
        []);
        
    return (
        <section id="hero" className="hero section" onMouseMove={handleMouseMove}>
            {/* Particles background */}
            <div className="particles">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        style={{ left: p.left, top: p.top }}
                        animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                    />
                ))}
            </div>

            <motion.div
                className="hero-content"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Բարև, ես <span className="highlight animate-float">Աշխեն Սուքիասյանն եմ</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {text}
                    <span className="cursor">|</span>
                </motion.p>

                <motion.p
                    className="hero-desc"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    Ստեղծում եմ մաքուր, արագ և գեղեցիկ վեբ հավելվածներ։
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Տեսնել նախագծերը
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Կապ հաստատել
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;