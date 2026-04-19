import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-pink/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-orange/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isFeatured = i === 0 || i === 3;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={isFeatured ? 'lg:col-span-2' : ''}
              >
                <Link
                  to={`/projet/${project.slug}`}
                  className="group relative block h-full"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-0.5 rounded-[18px] bg-gradient-to-r from-primary-500/0 via-accent-pink/0 to-accent-cyan/0 group-hover:from-primary-500/20 group-hover:via-accent-pink/20 group-hover:to-accent-cyan/20 blur-lg transition-all duration-500 -z-10" />

                  <div className="relative h-full rounded-2xl bg-white/90 dark:bg-surface-800/60 backdrop-blur-sm border border-surface-200/50 dark:border-surface-800/50 shadow-sm dark:shadow-none group-hover:border-primary-500/30 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary-500/10">
                    {/* Image */}
                    <div className={`relative overflow-hidden ${isFeatured ? 'h-52 sm:h-72' : 'h-48'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Color overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-multiply`} />
                      {/* Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-100 dark:from-surface-800 via-transparent to-transparent opacity-80" />

                      {/* Floating view badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye size={13} />
                        {t('projects.view')}
                      </div>

                      {/* Gradient corner accent */}
                      <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 rounded-br-full transition-opacity duration-500`} />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className={`font-bold group-hover:text-primary-500 transition-colors duration-300 ${isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="flex-shrink-0 mt-1 text-surface-900/30 dark:text-surface-200/30 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                        />
                      </div>

                      <p className="text-sm text-surface-900/60 dark:text-surface-200/60 mb-4 line-clamp-2">
                        {project.shortDesc[lang] || project.shortDesc.fr}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags &&
                          (project.tags[lang] || project.tags.fr).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green font-medium border border-accent-green/15"
                            >
                              {tag}
                            </span>
                          ))}
                        {project.stack.map((tech, techIndex) => {
                          const gradients = [
                            'from-primary-500/10 to-accent-cyan/10',
                            'from-accent-pink/10 to-accent-orange/10',
                            'from-accent-green/10 to-accent-yellow/10',
                            'from-accent-blue/10 to-primary-500/10',
                          ];
                          return (
                            <span
                              key={tech}
                              className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${gradients[techIndex % gradients.length]} font-medium border border-primary-500/10 dark:border-primary-400/10 text-primary-600 dark:text-primary-400`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <Link
            to="/projets"
            className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-primary-500/30 hover:border-primary-500 text-primary-500 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
          >
            {t('projects.view_all')}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
