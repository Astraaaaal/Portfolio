import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import GradientText from '../components/GradientText';

export default function AllProjects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-surface-900/60 dark:text-surface-200/60 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft size={16} />
            {t('all_projects.back')}
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            <GradientText>{t('all_projects.title')}</GradientText>
          </h1>
          <p className="text-surface-900/60 dark:text-surface-200/60 text-lg">
            {t('all_projects.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/projet/${project.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full rounded-2xl bg-white/90 dark:bg-surface-800/60 border border-surface-200/50 dark:border-surface-800/50 shadow-sm dark:shadow-none hover:border-primary-500/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-surface-800 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary-500 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="flex-shrink-0 mt-1 text-surface-900/30 dark:text-surface-200/30 group-hover:text-primary-500 transition-all"
                      />
                    </div>
                    <p className="text-sm text-surface-900/60 dark:text-surface-200/60 mb-4">
                      {project.shortDesc[lang] || project.shortDesc.fr}
                    </p>
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
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium border border-primary-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
