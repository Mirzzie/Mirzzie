// ============================================================
// PORTFOLIO APP - Renders the portfolio from data.js
// ============================================================

(function () {
  'use strict';

  const d = portfolioData;
  let audienceState = { type: null, answers: {} };
  let defaults = null;

  // ── SVG ICONS ──────────────────────────────────────────────
  const icons = {
    github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    devto: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .67-.08.84-.23.2-.18.3-.46.3-.94v-2.02c0-.48-.1-.76-.3-.94zm13.37-7.13c-.12-.45-.55-.82-1.01-.95-.93-.26-4.7-.26-4.7-.26s-3.77 0-4.7.26c-.46.13-.89.5-1.01.95C9.11 3.79 9.11 6 9.11 6s0 2.21.26 3.08c.12.45.55.82 1.01.95.93.26 4.7.26 4.7.26s3.77 0 4.7-.26c.46-.13.89-.5 1.01-.95.26-.87.26-3.08.26-3.08s0-2.21-.26-3.08z"/></svg>',
    medium: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    location: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>',
    blog: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>',
    cert: {
      aws: '⚡',
      azure: '☁️',
      gcp: '🌐',
      kubernetes: '⎈',
      security: '🛡️',
      linux: '🐧',
      terraform: '🏗️',
      default: '📜'
    }
  };

  // ── UTILITY: Create element helper ─────────────────────────
  function el(tag, attrs = {}, children = []) {
    const element = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'className') element.className = val;
      else if (key === 'innerHTML') element.innerHTML = val;
      else if (key === 'textContent') element.textContent = val;
      else if (key.startsWith('on')) element.addEventListener(key.slice(2).toLowerCase(), val);
      else element.setAttribute(key, val);
    }
    children.forEach(child => {
      if (typeof child === 'string') element.appendChild(document.createTextNode(child));
      else if (child) element.appendChild(child);
    });
    return element;
  }

  // ── RENDER: Hero Section ───────────────────────────────────
  function renderHero() {
    // Availability badge
    const availability = document.getElementById('heroAvailability');
    availability.textContent = d.personal.availability;

    // Avatar
    const avatar = document.getElementById('heroAvatar');
    if (d.personal.avatarUrl) {
      avatar.innerHTML = `<img src="${encodeURI(d.personal.avatarUrl)}" alt="${d.personal.name}" loading="eager">`;
    } else {
      const initials = d.personal.name.split(' ').map(n => n[0]).join('').slice(0, 2);
      avatar.textContent = initials;
    }

    // Name & Title
    document.getElementById('heroName').textContent = d.personal.name;
    document.getElementById('heroTitle').textContent = d.personal.title;
    document.getElementById('heroTagline').textContent = d.personal.tagline;

    // Resume link
    const resumeBtn = document.getElementById('heroResume');
    if (d.personal.resumeLink && d.personal.resumeLink !== '#') {
      resumeBtn.href = d.personal.resumeLink;
      resumeBtn.setAttribute('target', '_blank');
      resumeBtn.setAttribute('rel', 'noopener noreferrer');
      resumeBtn.removeAttribute('download');
      resumeBtn.onclick = null;
    } else {
      if (d.personal.email) {
        resumeBtn.href = `mailto:${encodeURIComponent(d.personal.email)}?subject=Resume%20request`;
        resumeBtn.removeAttribute('download');
        resumeBtn.removeAttribute('target');
        resumeBtn.removeAttribute('rel');
        resumeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Request my resume';
        resumeBtn.onclick = null;
      } else {
        resumeBtn.style.display = 'none';
      }
    }

    // Stats
    const statsContainer = document.getElementById('heroStats');
    d.stats.forEach(stat => {
      statsContainer.appendChild(
        el('div', { className: 'hero-stat' }, [
          el('div', { className: 'hero-stat-value', textContent: stat.value }),
          el('div', { className: 'hero-stat-label', textContent: stat.label })
        ])
      );
    });

    // Social Links
    renderSocialLinks('heroSocial');

    // Update page title
    document.title = `${d.personal.name} | ${d.personal.title}`;
    document.querySelector('meta[property="og:title"]').setAttribute('content', `${d.personal.name} | ${d.personal.title}`);
    document.querySelector('meta[property="og:description"]').setAttribute('content', d.personal.tagline);
  }

  // ── RENDER: Social Links ───────────────────────────────────
  function renderSocialLinks(containerId) {
    const container = document.getElementById(containerId);
    const socialMap = {
      github: { icon: icons.github, label: 'GitHub' },
      linkedin: { icon: icons.linkedin, label: 'LinkedIn' },
      twitter: { icon: icons.twitter, label: 'Twitter/X' },
      devto: { icon: icons.devto, label: 'Dev.to' },
      medium: { icon: icons.medium, label: 'Medium' },
      blog: { icon: icons.blog, label: 'Blog' },
    };

    for (const [key, value] of Object.entries(d.social)) {
      if (value && socialMap[key]) {
        const link = el('a', {
          href: value,
          'aria-label': socialMap[key].label,
          target: '_blank',
          rel: 'noopener noreferrer',
          innerHTML: socialMap[key].icon
        });
        container.appendChild(link);
      }
    }
  }

  // ── RENDER: About Section ──────────────────────────────────
  function renderAbout() {
    const container = document.getElementById('aboutContent');
    d.personal.bio.forEach(paragraph => {
      container.appendChild(el('p', { textContent: paragraph, className: 'fade-in' }));
    });
  }

  // ── RENDER: Value Proposition ──────────────────────────────
  function renderValueProposition() {
    if (!d.valueProposition) return;

    const vp = d.valueProposition;
    document.getElementById('vpHeadline').textContent = vp.headline;
    document.getElementById('vpSubheadline').textContent = vp.subheadline;

    const container = document.getElementById('vpGrid');

    vp.cards.forEach(card => {
      const proofList = el('ul', { className: 'vp-card-proof' });
      card.proof.forEach(p => {
        proofList.appendChild(el('li', { textContent: p }));
      });

      const vpCard = el('div', { className: 'vp-card' }, [
        el('div', { className: 'vp-card-header' }, [
          el('span', { className: 'vp-card-icon', textContent: card.icon }),
          el('span', { className: 'vp-card-role', textContent: card.role })
        ]),
        el('p', { className: 'vp-card-promise', textContent: card.promise }),
        proofList,
        el('div', { className: 'vp-card-edge', textContent: card.edge })
      ]);

      container.appendChild(vpCard);
    });
  }

  // ── RENDER: Education ──────────────────────────────────────
  function renderEducation() {
    if (!d.education) return;

    const container = document.getElementById('educationGrid');

    d.education.forEach(edu => {
      const children = [
        el('div', { className: 'education-header' }, [
          el('span', { className: 'education-icon', textContent: edu.icon }),
          el('div', {}, [
            el('div', { className: 'education-degree', textContent: edu.degree }),
            el('div', { className: 'education-institution', textContent: edu.institution }),
            el('div', { className: 'education-meta', textContent: `${edu.period} • ${edu.location}` })
          ])
        ])
      ];

      if (edu.modules && edu.modules.length > 0) {
        const modulesList = el('div', { className: 'education-modules-list' });
        edu.modules.forEach(mod => {
          modulesList.appendChild(el('span', { className: 'education-module-tag', textContent: mod }));
        });

        children.push(
          el('div', { className: 'education-modules' }, [
            el('div', { className: 'education-modules-title', textContent: 'Modules' }),
            modulesList
          ])
        );
      }

      container.appendChild(el('div', { className: 'education-card' }, children));
    });
  }

  // ── RENDER: Currently Learning ─────────────────────────────
  function renderCurrentlyLearning() {
    if (!d.currentlyLearning || !d.currentlyLearning.enabled) return;

    document.getElementById('learning').style.display = 'block';
    const container = document.getElementById('learningGrid');

    d.currentlyLearning.items.forEach(item => {
      const card = el('div', { className: 'learning-card' }, [
        el('div', { className: 'learning-skill-name', textContent: item.skill }),
        el('div', { className: 'learning-context', textContent: item.context }),
        el('div', { className: 'learning-bar' }, [
          el('div', { className: 'learning-bar-fill', 'data-level': item.progress })
        ]),
        el('div', { className: 'learning-label' }, [
          el('span', { textContent: 'Learning' }),
          el('span', { textContent: `${item.progress}%` })
        ])
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Timeline / Journey ─────────────────────────────
  function renderTimeline() {
    const container = document.getElementById('timeline');

    d.journey.forEach(item => {
      const achievementsList = el('ul', { className: 'timeline-achievements' });
      item.achievements.forEach(a => {
        achievementsList.appendChild(el('li', { textContent: a }));
      });

      const techTags = el('div', { className: 'timeline-tech' });
      item.technologies.forEach(t => {
        techTags.appendChild(el('span', { textContent: t }));
      });

      const timelineItem = el('div', { className: 'timeline-item' }, [
        el('div', { className: 'timeline-dot', textContent: item.icon }),
        el('div', { className: 'timeline-phase', textContent: item.phase }),
        el('h3', { className: 'timeline-role', textContent: item.role }),
        el('div', { className: 'timeline-meta', innerHTML: `<span>${item.company}</span><span>•</span><span>${item.period}</span>` }),
        el('p', { className: 'timeline-description', textContent: item.description }),
        achievementsList,
        techTags
      ]);

      container.appendChild(timelineItem);
    });
  }

  // ── RENDER: Skills ─────────────────────────────────────────
  function renderSkills() {
    const container = document.getElementById('skillsGrid');

    d.skills.forEach(category => {
      const skillItems = el('div');
      category.items.forEach(skill => {
        const item = el('div', { className: 'skill-item' }, [
          el('div', { className: 'skill-item-header' }, [
            el('span', { className: 'skill-item-name', textContent: skill.name }),
            el('span', { className: 'skill-item-level', textContent: skill.proficiency || skill.name })
          ])
        ]);
        skillItems.appendChild(item);
      });

      const card = el('div', { className: 'skill-card' }, [
        el('div', { className: 'skill-card-header' }, [
          el('span', { className: 'skill-card-icon', textContent: category.icon }),
          el('h3', { className: 'skill-card-title', textContent: category.category })
        ]),
        skillItems
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Certifications ─────────────────────────────────
  function renderCertifications() {
    const container = document.getElementById('certsGrid');

    d.certifications.forEach(cert => {
      const iconClass = icons.cert[cert.icon] ? cert.icon : 'default';
      const iconText = icons.cert[cert.icon] || icons.cert.default;

      const verifyEl = cert.verifyLink && cert.verifyLink !== '#'
        ? el('a', { className: 'cert-verify', href: cert.verifyLink, target: '_blank', rel: 'noopener noreferrer', textContent: 'Verify →' })
        : null;

      const card = el('div', { className: 'cert-card' }, [
        el('div', { className: `cert-icon ${iconClass}`, textContent: iconText }),
        el('div', { className: 'cert-info' }, [
          el('div', { className: 'cert-name', textContent: cert.name }),
          el('div', { className: 'cert-issuer', textContent: cert.issuer }),
          el('div', { className: 'cert-date', textContent: cert.date }),
          verifyEl
        ].filter(Boolean))
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Projects ───────────────────────────────────────
  function renderProjects() {
    const section = document.getElementById('projects');
    const container = document.getElementById('projectsGrid');
    if (!section || !container) return;

    container.innerHTML = '';

    const existingEvidence = section.querySelector('.security-evidence');
    if (existingEvidence) {
      existingEvidence.remove();
    }

    if (d.securityEvidence && d.securityEvidence.enabled && Array.isArray(d.securityEvidence.items) && d.securityEvidence.items.length) {
      const evidenceGrid = el('div', { className: 'security-evidence-grid' });

      d.securityEvidence.items.forEach((item) => {
        const outcomes = el('ul', { className: 'security-evidence-list' });
        (item.outcomes || []).forEach((outcome) => {
          outcomes.appendChild(el('li', { textContent: outcome }));
        });

        const tools = el('div', { className: 'security-evidence-tools' });
        (item.tools || []).forEach((tool) => {
          tools.appendChild(el('span', { className: 'security-evidence-tool', textContent: tool }));
        });

        const card = el('article', { className: 'security-evidence-card fade-in' }, [
          el('h4', { className: 'security-evidence-card-title', textContent: item.title }),
          el('p', { className: 'security-evidence-card-summary', textContent: item.summary }),
          (item.outcomes && item.outcomes.length) ? outcomes : null,
          (item.tools && item.tools.length) ? tools : null
        ].filter(Boolean));

        evidenceGrid.appendChild(card);
      });

      const evidenceBlock = el('div', { className: 'security-evidence fade-in' }, [
        el('h3', { className: 'security-evidence-title', textContent: d.securityEvidence.headline || 'SOC & Cybersecurity Evidence' }),
        d.securityEvidence.subheadline
          ? el('p', { className: 'security-evidence-subtitle', textContent: d.securityEvidence.subheadline })
          : null,
        evidenceGrid
      ].filter(Boolean));

      const sectionContainer = section.querySelector('.container');
      if (sectionContainer) {
        sectionContainer.insertBefore(evidenceBlock, container);
      }
    }

    const projectIcons = ['🏗️', '🔄', '⎈', '📊', '🛡️', '☁️', '⚙️', '🔒'];

    d.projects.forEach((project, index) => {
      const tags = el('div', { className: 'project-tags' });
      project.tags.forEach(tag => {
        tags.appendChild(el('span', { className: 'project-tag', textContent: tag }));
      });

      const highlights = el('ul', { className: 'project-highlights' });
      project.highlights.forEach(h => {
        highlights.appendChild(el('li', { textContent: h }));
      });

      const links = el('div', { className: 'project-links' });
      if (project.githubLink && project.githubLink !== '#') {
        links.appendChild(el('a', {
          className: 'project-link',
          href: project.githubLink,
          target: '_blank',
          rel: 'noopener noreferrer',
          innerHTML: `${icons.github} Code`
        }));
      }
      if (project.liveLink) {
        links.appendChild(el('a', {
          className: 'project-link',
          href: project.liveLink,
          target: '_blank',
          rel: 'noopener noreferrer',
          innerHTML: `${icons.external} Live Demo`
        }));
      }

      const imageContent = project.image
        ? el('img', { src: encodeURI(project.image), alt: project.title, loading: 'lazy' })
        : el('div', { className: 'project-image-icon', textContent: projectIcons[index % projectIcons.length] });

      const card = el('div', { className: 'project-card' }, [
        el('div', { className: 'project-image' }, [imageContent]),
        el('div', { className: 'project-body' }, [
          el('h3', { className: 'project-title', textContent: project.title }),
          el('p', { className: 'project-description', textContent: project.description }),
          highlights,
          tags,
          links
        ])
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Blog ───────────────────────────────────────────
  function renderBlog() {
    if (!d.blog || !d.blog.enabled) return;

    document.getElementById('blog').style.display = 'block';
    const container = document.getElementById('blogGrid');

    d.blog.posts.forEach(post => {
      const tags = el('div', { className: 'blog-tags' });
      post.tags.forEach(tag => {
        tags.appendChild(el('span', { className: 'blog-tag', textContent: tag }));
      });

      const card = el('a', { className: 'blog-card', href: post.link, target: '_blank', rel: 'noopener noreferrer' }, [
        el('div', { className: 'blog-date', textContent: post.date }),
        el('h3', { className: 'blog-title', textContent: post.title }),
        el('p', { className: 'blog-excerpt', textContent: post.excerpt }),
        tags
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Testimonials ───────────────────────────────────
  function renderTestimonials() {
    if (!d.testimonials || !d.testimonials.enabled) return;

    document.getElementById('testimonials-section').style.display = 'block';
    const container = document.getElementById('testimonialsGrid');

    d.testimonials.items.forEach(testimonial => {
      const card = el('div', { className: 'testimonial-card' }, [
        el('p', { className: 'testimonial-text', textContent: testimonial.text }),
        el('div', {}, [
          el('div', { className: 'testimonial-author', textContent: testimonial.author }),
          el('div', { className: 'testimonial-role', textContent: `${testimonial.role} at ${testimonial.company}` })
        ])
      ]);

      container.appendChild(card);
    });
  }

  // ── RENDER: Contact ────────────────────────────────────────
  function renderContact() {
    const infoContainer = document.getElementById('contactInfo');

    if (d.personal.email) {
      const emailItem = el('div', { className: 'contact-item' });
      emailItem.insertAdjacentHTML('beforeend', icons.mail);

      const emailBtn = el('button', {
        className: 'contact-copy-btn',
        type: 'button',
        textContent: d.personal.email,
        'aria-label': 'Copy email address'
      });

      let resetEmailCopyTimer = null;
      emailBtn.addEventListener('click', async () => {
        let copied = false;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(d.personal.email);
            copied = true;
          }
        } catch (error) {
          copied = false;
        }

        if (!copied) {
          const textarea = document.createElement('textarea');
          textarea.value = d.personal.email;
          textarea.setAttribute('readonly', 'true');
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          textarea.style.pointerEvents = 'none';
          document.body.appendChild(textarea);
          textarea.select();
          copied = document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        if (copied) {
          emailBtn.textContent = 'Email copied';
          emailBtn.classList.add('copied');
          if (resetEmailCopyTimer) {
            clearTimeout(resetEmailCopyTimer);
          }
          resetEmailCopyTimer = setTimeout(() => {
            emailBtn.textContent = d.personal.email;
            emailBtn.classList.remove('copied');
          }, 1600);
        }
      });

      emailItem.appendChild(emailBtn);
      infoContainer.appendChild(emailItem);
    }

    if (d.personal.location) {
      infoContainer.appendChild(
        el('div', { className: 'contact-item', innerHTML: `${icons.location} ${d.personal.location}` })
      );
    }

    if (d.personal.hiringFocus) {
      infoContainer.appendChild(
        el('div', { className: 'contact-item', innerHTML: `${icons.briefcase} ${d.personal.hiringFocus}` })
      );
    }

    // Calendly link in contact
    if (d.personal.calendlyLink) {
      infoContainer.appendChild(
        el('div', { className: 'contact-item' }, [
          el('a', {
            href: d.personal.calendlyLink,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'btn btn-primary btn-sm',
            textContent: '📅 Book a call'
          })
        ])
      );
    }

    renderSocialLinks('contactSocial');
  }

  // ── RENDER: Consultation ───────────────────────────────────
  function renderConsultation() {
    if (!d.consultation || !d.consultation.enabled) return;

    document.getElementById('consultation').style.display = 'block';
    const c = d.consultation;
    document.getElementById('consultHeadline').textContent = c.headline;
    document.getElementById('consultSubheadline').textContent = c.subheadline;

    const grid = document.getElementById('consultGrid');
    c.services.forEach(service => {
      const exampleTags = el('div', { className: 'consult-examples' });
      service.examples.forEach(ex => {
        exampleTags.appendChild(el('span', { className: 'consult-example-tag', textContent: ex }));
      });

      const card = el('div', { className: 'consult-card' }, [
        el('div', { className: 'consult-card-icon', textContent: service.icon }),
        el('h3', { className: 'consult-card-title', textContent: service.title }),
        el('p', { className: 'consult-card-desc', textContent: service.description }),
        exampleTags
      ]);

      grid.appendChild(card);
    });

    // CTA
    const ctaContainer = document.getElementById('consultCta');
    const ctaBlock = el('div', { className: 'consult-cta-block' }, [
      el('a', {
        href: c.cta.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'btn btn-primary btn-lg',
        textContent: c.cta.text
      }),
      el('p', { className: 'consult-cta-subtext', textContent: c.cta.subtext })
    ]);
    ctaContainer.appendChild(ctaBlock);
  }

  // ── RENDER: Footer ─────────────────────────────────────────
  function renderFooter() {
    document.getElementById('footerYear').textContent = new Date().getFullYear();
  }

  function captureDefaults() {
    if (defaults) return;
    const heroPrimaryBtn = document.querySelector('.hero-actions .btn-primary');
    const heroOutlineBtn = document.querySelector('.hero-actions .btn-outline');

    defaults = {
      availability: document.getElementById('heroAvailability').textContent,
      tagline: document.getElementById('heroTagline').textContent,
      vpSubheadline: document.getElementById('vpSubheadline').textContent,
      consultSubheadline: document.getElementById('consultSubheadline').textContent,
      midCtaText: document.querySelector('.mid-cta p').textContent,
      contactText: document.querySelector('.contact-text').textContent,
      heroPrimary: {
        text: heroPrimaryBtn ? heroPrimaryBtn.textContent : '',
        href: heroPrimaryBtn ? heroPrimaryBtn.getAttribute('href') : '#'
      },
      heroOutline: {
        text: heroOutlineBtn ? heroOutlineBtn.textContent : '',
        href: heroOutlineBtn ? heroOutlineBtn.getAttribute('href') : '#'
      }
    };
  }

  function reorderContentFlow(mode, answers = {}) {
    const anchor = document.querySelector('.footer');
    if (!anchor) return;

    const blocks = {
      about: document.getElementById('about'),
      value: document.getElementById('value'),
      midCta: document.getElementById('midCtaBlock'),
      consultation: document.getElementById('consultation'),
      journey: document.getElementById('journey'),
      skills: document.getElementById('skills'),
      education: document.getElementById('education'),
      certifications: document.getElementById('certifications'),
      projects: document.getElementById('projects'),
      contact: document.getElementById('contact')
    };

    const speed = answers.speed || 'balanced';
    const primary = answers.primary || '';

    let order = ['about', 'value', 'midCta', 'consultation', 'journey', 'skills', 'education', 'certifications', 'projects', 'contact'];

    if (mode === 'recruiter') {
      order = speed === 'quick'
        ? ['value', 'skills', 'certifications', 'projects', 'contact', 'journey', 'about', 'education', 'consultation', 'midCta']
        : ['value', 'skills', 'journey', 'certifications', 'projects', 'about', 'contact', 'education', 'consultation', 'midCta'];
    }

    if (mode === 'business') {
      order = ['value', 'consultation', 'projects', 'skills', 'contact', 'about', 'journey', 'education', 'certifications', 'midCta'];
    }

    if (mode === 'visitor') {
      if (primary === 'projects') {
        order = ['projects', 'journey', 'value', 'about', 'skills', 'certifications', 'contact', 'education', 'consultation', 'midCta'];
      } else if (primary === 'services') {
        order = ['consultation', 'value', 'projects', 'about', 'contact', 'journey', 'skills', 'education', 'certifications', 'midCta'];
      } else {
        order = ['journey', 'about', 'projects', 'value', 'skills', 'certifications', 'contact', 'education', 'consultation', 'midCta'];
      }
    }

    order.forEach((key) => {
      const block = blocks[key];
      if (block) {
        document.body.insertBefore(block, anchor);
      }
    });
  }

  function setScanMode(mode, answers = {}) {
    const speed = answers.speed || 'balanced';
    document.body.classList.toggle('recruiter-scan', mode === 'recruiter' && speed === 'quick');
  }

  function setSectionVisibility(mode, answers = {}) {
    const consultation = document.getElementById('consultation');
    const education = document.getElementById('education');
    const about = document.getElementById('about');
    const value = document.getElementById('value');
    const midCta = document.getElementById('midCtaBlock');
    const journey = document.getElementById('journey');
    const skills = document.getElementById('skills');
    const certifications = document.getElementById('certifications');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    const sectionMap = {
      about,
      value,
      midCta,
      consultation,
      journey,
      skills,
      education,
      certifications,
      projects,
      contact
    };

    function setVisible(sectionId, visible) {
      const sectionEl = sectionMap[sectionId];
      if (sectionEl) {
        sectionEl.style.display = visible ? 'block' : 'none';
      }
      const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (navLink) {
        navLink.parentElement.style.display = visible ? '' : 'none';
      }
    }

    Object.keys(sectionMap).forEach((key) => setVisible(key, true));

    const consultDefault = Boolean(d.consultation && d.consultation.enabled);
    consultation.style.display = consultDefault ? 'block' : 'none';
    education.style.display = 'block';

    if (mode === 'recruiter') {
      setVisible('consultation', false);
    }

    if (mode === 'business') {
      setVisible('education', false);
      setVisible('consultation', true);
      setVisible('certifications', false);
    }

    const speed = answers.speed || 'balanced';
    const primary = answers.primary || '';

    if (speed === 'quick') {
      if (mode === 'recruiter') {
        ['about', 'consultation', 'journey', 'education', 'midCta'].forEach((id) => setVisible(id, false));
      }

      if (mode === 'business') {
        ['about', 'journey', 'education', 'certifications', 'skills', 'midCta'].forEach((id) => setVisible(id, false));
      }

      if (mode === 'visitor') {
        if (primary === 'story') {
          ['consultation', 'education', 'certifications', 'skills', 'midCta'].forEach((id) => setVisible(id, false));
        }
        if (primary === 'projects') {
          ['consultation', 'education', 'value', 'midCta'].forEach((id) => setVisible(id, false));
        }
        if (primary === 'services') {
          ['education', 'certifications', 'journey', 'skills', 'midCta'].forEach((id) => setVisible(id, false));
          setVisible('consultation', true);
        }
      }
    }

    reorderContentFlow(mode, answers);
    setScanMode(mode, answers);
  }

  function applyAudienceMode(mode, answers = {}) {
    captureDefaults();
    audienceState = { type: mode, answers };
    document.body.dataset.audience = mode;

    const heroAvailability = document.getElementById('heroAvailability');
    const heroTagline = document.getElementById('heroTagline');
    const vpSubheadline = document.getElementById('vpSubheadline');
    const consultSubheadline = document.getElementById('consultSubheadline');
    const midCtaText = document.querySelector('.mid-cta p');
    const contactText = document.querySelector('.contact-text');
    const heroPrimaryBtn = document.querySelector('.hero-actions .btn-primary');
    const heroOutlineBtn = document.querySelector('.hero-actions .btn-outline');
    const quickSummary = document.getElementById('quickSummary');

    heroAvailability.textContent = defaults.availability;
    heroTagline.textContent = defaults.tagline;
    vpSubheadline.textContent = defaults.vpSubheadline;
    consultSubheadline.textContent = defaults.consultSubheadline;
    midCtaText.textContent = defaults.midCtaText;
    contactText.textContent = defaults.contactText;

    heroPrimaryBtn.textContent = defaults.heroPrimary.text;
    heroPrimaryBtn.setAttribute('href', defaults.heroPrimary.href);
    heroOutlineBtn.textContent = defaults.heroOutline.text;
    heroOutlineBtn.setAttribute('href', defaults.heroOutline.href);

    setSectionVisibility(mode, answers);

    if (mode === 'recruiter') {
      heroAvailability.textContent = defaults.availability;
      heroTagline.textContent = 'If you are hiring, I will keep this practical: role fit, real outcomes, and how quickly I can contribute.';
      vpSubheadline.textContent = 'You can scan my fit across IT operations and cybersecurity or SOC support work.';
      midCtaText.textContent = 'Hiring for IT operations or cybersecurity? I can show the right proof quickly.';
      contactText.textContent = 'If you are recruiting, I can share my resume and walk through role fit in one short conversation.';

      const recruiterRole = answers.primary || 'operations';
      if (recruiterRole === 'cloud') {
        heroPrimaryBtn.textContent = 'See cloud proof';
        heroPrimaryBtn.setAttribute('href', '#projects');
      } else if (recruiterRole === 'security') {
        heroPrimaryBtn.textContent = 'See security fit';
        heroPrimaryBtn.setAttribute('href', '#skills');
      } else if (recruiterRole === 'devops') {
        heroPrimaryBtn.textContent = 'See delivery experience';
        heroPrimaryBtn.setAttribute('href', '#journey');
      } else {
        heroPrimaryBtn.textContent = 'See operations fit';
        heroPrimaryBtn.setAttribute('href', '#skills');
      }
      heroOutlineBtn.textContent = 'Jump to certifications';
      heroOutlineBtn.setAttribute('href', '#certifications');
    }

    if (mode === 'business') {
      heroAvailability.textContent = defaults.availability;
      heroTagline.textContent = 'If you need practical help with cloud, ops, or cybersecurity basics, I will show where I can help and how we can start.';
      vpSubheadline.textContent = 'Focused on practical outcomes, clear communication, and solutions that fit your current stage.';
      consultSubheadline.textContent = 'Pick what you need most right now and we can start with focused, practical support.';
      midCtaText.textContent = 'Got a stuck issue in operations, cloud, or security? Let us turn it into a clear action plan.';
      contactText.textContent = 'If you have a practical IT, cloud, or security challenge, book a quick call and I will tell you how I can help.';

      heroPrimaryBtn.textContent = 'View services';
      heroPrimaryBtn.setAttribute('href', '#consultation');
      heroOutlineBtn.textContent = 'See outcomes';
      heroOutlineBtn.setAttribute('href', '#projects');
    }

    if (mode === 'visitor') {
      heroAvailability.textContent = defaults.availability;
      heroTagline.textContent = 'Welcome. If you are exploring, I will show the honest story, what I built, and what I learned on the way.';
      vpSubheadline.textContent = 'Explore the journey, projects, and real-world lessons behind my work.';
      midCtaText.textContent = 'Curious about the journey? Start where you like and explore at your own pace.';
      contactText.textContent = 'If you want to connect, learn, or collaborate, feel free to reach out.';

      heroPrimaryBtn.textContent = 'Explore my journey';
      heroPrimaryBtn.setAttribute('href', '#journey');
      heroOutlineBtn.textContent = 'See projects';
      heroOutlineBtn.setAttribute('href', '#projects');
    }

    if (quickSummary) {
      quickSummary.style.display = 'none';
      quickSummary.innerHTML = '';
    }

    document.body.classList.remove('audience-quick');
    const speed = answers.speed || 'balanced';
    if (speed === 'quick' && quickSummary) {
      const summaryMap = {
        recruiter: [
          'Profile fit: IT operations plus cybersecurity or SOC roles',
          'Evidence: real client support, cloud operations delivery, and MSc cybersecurity depth',
          'Best route now: skills, certifications, projects, then contact'
        ],
        business: [
          'Support style: practical help for cloud, operations, and security basics',
          'Approach: clear communication and action-oriented guidance',
          'Best route now: services, outcomes, then a short call'
        ],
        visitor: [
          'Start with the journey for context',
          'Move to projects for practical work and outcomes',
          'Reach out anytime if you want to connect'
        ]
      };

      const list = el('ul', { className: 'quick-summary-list' });
      (summaryMap[mode] || summaryMap.visitor).forEach((item) => {
        list.appendChild(el('li', { textContent: item }));
      });
      quickSummary.appendChild(list);
      quickSummary.style.display = 'block';
      document.body.classList.add('audience-quick');
    }

  }

  function initAudienceGate() {
    const gate = document.getElementById('audienceGate');
    const welcome = document.getElementById('gateWelcome');
    const title = document.getElementById('gateTitle');
    const subtitle = document.getElementById('gateSubtitle');
    const choices = document.getElementById('gateChoices');
    const backBtn = document.getElementById('gateBack');
    const skipBtn = document.getElementById('gateSkip');
    if (!gate || !welcome || !title || !subtitle || !choices || !backBtn || !skipBtn) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const flows = {
      recruiter: {
        intro: 'Great, thanks.',
        questions: [
          {
            key: 'primary',
            question: 'What are you hiring for right now?',
            options: [
              { value: 'operations', label: 'IT operations', note: 'Support, reliability, incident response' },
              { value: 'cloud', label: 'Cloud operations', note: 'Hands-on cloud delivery and upkeep' },
              { value: 'security', label: 'Cybersecurity / SOC', note: 'SOC and security operations fit' },
              { value: 'devops', label: 'DevOps support', note: 'Pipeline and automation support' }
            ]
          },
          {
            key: 'speed',
            question: 'How do you want to review this profile?',
            options: [
              { value: 'quick', label: 'Short info', note: 'Fast recruiter scan' },
              { value: 'balanced', label: 'Balanced view', note: 'Normal overview' },
              { value: 'deep', label: 'Deep review', note: 'Full details and flow' }
            ]
          }
        ]
      },
      business: {
        intro: 'Perfect, thanks.',
        questions: [
          {
            key: 'primary',
            question: 'What do you need most right now?',
            options: [
              { value: 'stability', label: 'Stabilize systems', note: 'Reliability and operations clarity' },
              { value: 'delivery', label: 'Improve delivery flow', note: 'Process and deployment efficiency' },
              { value: 'security', label: 'Security guidance', note: 'Practical risk-focused guidance' }
            ]
          },
          {
            key: 'speed',
            question: 'How would you like this view?',
            options: [
              { value: 'quick', label: 'Short info', note: 'Top outcomes first' },
              { value: 'balanced', label: 'Balanced', note: 'Clear and practical flow' },
              { value: 'deep', label: 'Detailed', note: 'Full context and details' }
            ]
          }
        ]
      },
      visitor: {
        intro: 'Lovely, thanks.',
        questions: [
          {
            key: 'primary',
            question: 'What do you want to explore first?',
            options: [
              { value: 'story', label: 'My journey', note: 'Background and growth path' },
              { value: 'projects', label: 'Projects', note: 'Practical work and outcomes' },
              { value: 'services', label: 'Services', note: 'What I can help with' }
            ]
          },
          {
            key: 'speed',
            question: 'How do you like to browse?',
            options: [
              { value: 'quick', label: 'Short info', note: 'Highlights only' },
              { value: 'balanced', label: 'Normal flow', note: 'Natural section flow' },
              { value: 'deep', label: 'Detailed sections', note: 'Everything in depth' }
            ]
          }
        ]
      }
    };

    let step = 0;
    let selectedType = null;
    let answers = {};
    let typingToken = 0;

    function delay(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    async function typeLine(node, text, token, speed = 18) {
      node.textContent = '';
      node.classList.add('typing');

      if (prefersReducedMotion) {
        node.textContent = text;
        node.classList.remove('typing');
        return;
      }

      for (let i = 0; i < text.length; i += 1) {
        if (token !== typingToken) {
          node.classList.remove('typing');
          return;
        }
        node.textContent += text.charAt(i);
        await delay(speed);
      }

      node.classList.remove('typing');
    }

    async function renderPrompt(lines) {
      const token = ++typingToken;
      const sequence = [
        { node: welcome, text: lines.welcome, speed: 14 },
        { node: title, text: lines.title, speed: 18 },
        { node: subtitle, text: lines.subtitle, speed: 12 }
      ];

      for (let i = 0; i < sequence.length; i += 1) {
        if (token !== typingToken) {
          return;
        }

        await typeLine(sequence[i].node, sequence[i].text, token, sequence[i].speed);

        if (!prefersReducedMotion && token === typingToken) {
          await delay(90);
        }
      }
    }

    function animateChoices() {
      choices.classList.remove('choices-anim');
      void choices.offsetWidth;
      choices.classList.add('choices-anim');
    }

    function openGate() {
      document.body.classList.add('gate-active');
      gate.classList.add('open');
    }

    function closeGate() {
      document.body.classList.remove('gate-active');
      gate.classList.remove('open');
    }

    function renderChoiceButtons(options, onSelect) {
      choices.innerHTML = '';
      options.forEach(opt => {
        const button = el('button', { className: 'audience-choice', type: 'button' }, [
          el('span', { className: 'audience-choice-title', textContent: opt.label }),
          opt.note ? el('span', { className: 'audience-choice-note', textContent: opt.note }) : null
        ].filter(Boolean));
        button.addEventListener('click', () => onSelect(opt.value));
        choices.appendChild(button);
      });
    }

    function renderStep() {
      backBtn.style.display = step > 0 ? 'inline-flex' : 'none';

      if (step === 0) {
        renderPrompt({
          welcome: 'Welcome, nice to meet you.',
          title: 'Can I ask who you are?',
          subtitle: 'Pick the option that feels closest to you.'
        });

        renderChoiceButtons([
          { value: 'recruiter', label: 'Recruiter', note: 'Hiring and role fit' },
          { value: 'business', label: 'Business person', note: 'Services and outcomes' },
          { value: 'visitor', label: 'Visitor', note: 'Explore my journey and projects' }
        ], (value) => {
          selectedType = value;
          answers = {};
          step = 1;
          renderStep();
        });
        animateChoices();
        return;
      }

      const flow = flows[selectedType];
      if (!flow) {
        step = 0;
        renderStep();
        return;
      }

      const questionIndex = step - 1;
      const currentQuestion = flow.questions[questionIndex];

      if (!currentQuestion) {
        applyAudienceMode(selectedType, answers);
        closeGate();
        return;
      }

      const isLastQuestion = questionIndex === flow.questions.length - 1;
      renderPrompt({
        welcome: flow.intro,
        title: currentQuestion.question,
        subtitle: isLastQuestion
          ? 'One last quick question.'
          : 'Choose the option that fits you best.'
      });

      renderChoiceButtons(currentQuestion.options, (value) => {
        answers[currentQuestion.key] = value;
        step += 1;
        renderStep();
      });
      animateChoices();
    }

    backBtn.addEventListener('click', () => {
      if (step > 0) {
        step -= 1;
        renderStep();
      }
    });

    skipBtn.addEventListener('click', () => {
      applyAudienceMode('visitor', { primary: 'story', speed: 'balanced' });
      closeGate();
    });

    const footerSub = document.querySelector('.footer-sub');
    if (footerSub && !document.getElementById('audienceReset')) {
      const resetBtn = el('button', {
        id: 'audienceReset',
        className: 'audience-reset',
        type: 'button',
        textContent: 'Personalize this page'
      });
      resetBtn.addEventListener('click', () => {
        step = 0;
        selectedType = null;
        answers = {};
        renderStep();
        openGate();
      });
      footerSub.appendChild(document.createTextNode(' • '));
      footerSub.appendChild(resetBtn);
    }

    renderStep();
    openGate();
  }

  // ── APPLY THEME ────────────────────────────────────────────
  function applyTheme() {
    const root = document.documentElement;
    if (d.theme) {
      if (d.theme.primaryColor) {
        root.style.setProperty('--accent', d.theme.primaryColor);
        // Convert hex to RGB
        const hex = d.theme.primaryColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        root.style.setProperty('--accent-rgb', `${r}, ${g}, ${b}`);
      }
      if (d.theme.secondaryColor) {
        root.style.setProperty('--accent-secondary', d.theme.secondaryColor);
        const hex = d.theme.secondaryColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        root.style.setProperty('--accent-secondary-rgb', `${r}, ${g}, ${b}`);
      }
      if (d.theme.fontFamily) {
        root.style.setProperty('--font-main', d.theme.fontFamily);
      }
    }
  }

  // ── NAVIGATION ─────────────────────────────────────────────
  function initNavigation() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      nav.classList.toggle('scrolled', scrollY > 50);
      lastScroll = scrollY;

      // Back to top button
      const backToTop = document.getElementById('backToTop');
      backToTop.classList.toggle('visible', scrollY > 500);

      // Active section highlighting
      highlightActiveSection();
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close mobile menu on link click
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });

    // Back to top
    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── ACTIVE SECTION HIGHLIGHTING ────────────────────────────
  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ── INTERSECTION OBSERVER (Scroll Animations) ─────────────
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');


          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe elements
    document.querySelectorAll('.timeline-item, .skill-card, .cert-card, .project-card, .vp-card, .education-card, .learning-card, .consult-card, .fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // ── INITIALIZE ─────────────────────────────────────────────
  function init() {
    applyTheme();
    renderHero();
    renderAbout();
    renderValueProposition();
    renderConsultation();
    renderTimeline();
    renderSkills();
    renderEducation();
    renderCertifications();
    renderProjects();
    renderBlog();
    renderTestimonials();
    renderContact();
    renderFooter();
    initNavigation();
    initAudienceGate();

    // Wait a frame for DOM to settle, then start animations
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initScrollAnimations();
      });
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
