import { motion } from 'framer-motion';
import '../About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                Իմ մասին
            </motion.h2>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <p>
                        Ես սովորում եմ վեբ ծրագրավորում, հետաքրքրված եմ React, TypeScript և
                        ժամանակակից CSS տեխնոլոգիաներով։ Սիրում եմ ստեղծել մաքուր,
                        հասանելի (accessible) և արագ էջեր։
                    </p>
                    <p>
                        Ներկայումս աշխատում եմ անձնական նախագծերի վրա և ուսումնասիրում
                        Next.js, Tailwind CSS:
                    </p>
                </motion.div>

                <motion.div
                    className="about-skills"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3>Հմտություններ</h3>
                    <ul>
                        {['HTML / CSS / JavaScript', 'React & TypeScript', 'Git & GitHub', 'Responsive Design'].map((skill, i) => (
                            <motion.li
                                key={skill}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;