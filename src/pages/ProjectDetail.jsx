import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../components/SocialIcons';
import { projects } from '../data/projects';
import GradientText from '../components/GradientText';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <Link to="/" className="text-primary-500 hover:underline">
            {t('project_detail.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
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
            {t('project_detail.back')}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <GradientText>{project.title}</GradientText>
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 text-primary-500 dark:text-primary-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 mix-blend-multiply`} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold mb-3">
                <GradientText>{t('project_detail.overview')}</GradientText>
              </h2>
              <p className="text-surface-900/70 dark:text-surface-200/70 leading-relaxed">
                {project.description[lang] || project.description.fr}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                <GradientText from="from-accent-pink" to="to-accent-orange">
                  {t('project_detail.features')}
                </GradientText>
              </h2>
              <ul className="space-y-2">
                {(project.features[lang] || project.features.fr).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-surface-900/70 dark:text-surface-200/70">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-accent-pink to-accent-orange flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-xl font-bold mb-3">
                <GradientText from="from-accent-green" to="to-accent-cyan">
                  {t('project_detail.stack')}
                </GradientText>
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200/50 dark:border-surface-800/50 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                <GradientText from="from-accent-orange" to="to-accent-yellow">
                  {t('project_detail.links')}
                </GradientText>
              </h2>
              <div className="flex flex-col gap-2">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium text-sm hover:scale-105 transition-transform"
                >
                  <ExternalLink size={16} />
                  {t('projects.view')}
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-100 dark:bg-surface-800 border border-surface-200/50 dark:border-surface-800/50 font-medium text-sm hover:border-primary-500/30 transition-all"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
