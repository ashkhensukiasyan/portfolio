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
                        Ես Աշխենն եմ՝ Junior Web Developer, հետաքրքրված եմ
                        ժամանակակից և user-friendly վեբ կայքերի ստեղծմամբ։
                        Վեբ ծրագրավորման ընթացքում սովորել և աշխատել եմ HTML,
                        CSS, Bootstrap, JavaScript, jQuery, PHP, MySQL, OOP,
                        MVC, React.js, Redux և TypeScript տեխնոլոգիաներով։
                    </p>

                    <p>
                        Անձնական նախագծերում փորձում եմ համատեղել ծրագրավորումը,
                        դիզայնը և օգտագործողի փորձը՝ ստեղծելով responsive,
                        ժամանակակից և ֆունկցիոնալ վեբ կայքեր։
                        Alin Mobile և Cake & Cream նախագծերում կիրառել եմ
                        React, TypeScript, JavaScript, Material UI, Axios,
                        Redux / RTK Query, Node.js, Express, տվյալների բազաներ
                        և REST API-ներ։
                    </p>

                    <p>
                        Ներկայումս շարունակում եմ զարգացնել գիտելիքներս և
                        ուսումնասիրում եմ նոր տեխնոլոգիաներ՝ հատկապես Next.js
                        և Tailwind CSS ուղղություններով։
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
                        {[
                            'HTML / CSS / Bootstrap',
                            'JavaScript / jQuery',
                            'PHP / MySQL / OOP / MVC',
                            'React / TypeScript',
                            'Redux / RTK Query',
                            'Node.js / Express',
                            'Material UI / Axios',
                            'REST API',
                            'MySQL / PostgreSQL',
                            'Git / GitHub',
                            'Responsive Design'
                        ].map((skill, i) => (
                            <motion.li
                                key={skill}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.1 * i,
                                    duration: 0.5
                                }}
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