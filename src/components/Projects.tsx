import { motion } from 'framer-motion';
import '../Projects.css';

const projects = [
    {
        title: 'ALIN MOBILE',
        desc: 'Alin Mobile — տեխնիկայի օնլայն խանութի full-stack վեբ նախագիծ՝ ժամանակակից, responsive և հարմարավետ ինտերֆեյսով։ Նախագիծը ներառում է ապրանքների կատալոգ, որոնում և ֆիլտրում, բազմալեզու բովանդակություն, օգտատիրոջ և ադմինիստրատորի գործառույթներ, ինչպես նաև ապրանքների կառավարման համակարգ։',
        tech: ['React', 'TypeScript', 'Material UI', 'React Router', 'TanStack Query', 'Axios', 'Framer Motion', 'i18next', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Passport.js', 'Google OAuth', 'Cloudinary', 'Nodemailer', 'Swagger'],
        link: 'https://alinmobile.am/',
        color: '#6c63ff',
    },
    {
        title: 'CAKE & CREAM',
        desc: 'Cake & Cream — տորթերի և քաղցրավենիքի պատվերի full-stack վեբ նախագիծ՝ ժամանակակից, responsive և անիմացիոն ինտերֆեյսով։ Նախագիծը ներառում է ապրանքների կատալոգ, կատեգորիաներ, հատուկ պատվերի ձևավորում, զեղչերի բաժին, պատվերի համակարգ և ադմինիստրատիվ կառավարման հնարավորություն։',
        tech: ['React', 'TypeScript', 'Material UI', 'Node.js', 'Express.js', 'PostgreSQL', 'Axios', 'React Query', 'React Hook Form', 'Framer Motion', 'JWT', 'Cloudinary'],
        link: 'https://cakeandcream.shop/',
        color: '#ff6b6b',
    },
    // {
    //     title: 'Նախագիծ 3',
    //     desc: 'Եվս մեկ հետաքրքիր նախագիծ։',
    //     tech: ['Next.js', 'Tailwind', 'Prisma'],
    //     link: '#',
    //     color: '#4ecdc4',
    // },
];

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                Իմ նախագծերը
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{
                            y: -10,
                            boxShadow: `0 20px 40px ${project.color}33`,
                            borderColor: project.color,
                        }}
                    >
                        <div
                            className="project-icon"
                            style={{ background: `${project.color}22`, color: project.color }}
                        >
                            {project.title[0]}
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <motion.span
                                    key={i}
                                    className="tech-badge"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {t}
                                </motion.span>
                            ))}
                        </div>
                        <motion.a
                            href={project.link}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                        >
                            Դիտել →
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;