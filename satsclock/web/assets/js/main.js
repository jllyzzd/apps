// ============================
// 主要交互功能
// ============================

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initLanguageSwitcher();
    initSmoothScroll();
    initScrollAnimations();
    initParallaxEffects();
});

// ============================
// 导航栏滚动效果
// ============================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // 添加滚动样式
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });
}

// ============================
// 语言切换器（下拉菜单）
// ============================
function initLanguageSwitcher() {
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const langItems = document.querySelectorAll('.lang-item');
    const currentLangSpan = dropdownBtn.querySelector('.current-lang');

    // 切换下拉菜单显示/隐藏
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownBtn.classList.toggle('active');
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownBtn.classList.remove('active');
        }
    });

    // 语言选项点击事件
    langItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            const langName = this.getAttribute('data-name');

            // 检查是否禁用
            if (this.classList.contains('disabled')) {
                // 显示"暂未实现"提示
                showToast(langName);
                // 关闭下拉菜单
                dropdownMenu.classList.remove('show');
                dropdownBtn.classList.remove('active');
                return;
            }

            // 切换语言
            if (lang && lang !== getCurrentLanguage()) {
                // 更新按钮显示的语言代码
                currentLangSpan.textContent = lang.toUpperCase();
                switchLanguage(lang);
            }

            // 关闭下拉菜单
            dropdownMenu.classList.remove('show');
            dropdownBtn.classList.remove('active');
        });
    });
}

// ============================
// Toast 通知
// ============================
let toastTimeout;

function showToast(langName) {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');

    // 根据当前语言显示不同的消息
    const currentLang = getCurrentLanguage();
    let message = '';

    if (currentLang === 'zh') {
        message = `${langName} 暂未实现，敬请期待`;
    } else {
        message = `${langName} is coming soon, stay tuned!`;
    }

    toastMessage.textContent = message;
    toast.classList.add('show');

    // 清除之前的定时器
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    // 3秒后自动隐藏
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================
// 平滑滚动
// ============================
function initSmoothScroll() {
    // 为所有锚点链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 忽略空锚点
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // 计算导航栏高度
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================
// 滚动动画
// ============================
function initScrollAnimations() {
    // 创建 Intersection Observer 用于检测元素进入视口
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // 可选：动画完成后停止观察
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 为所有功能卡片、主题卡片等添加动画
    const animatedElements = document.querySelectorAll(
        '.feature-card, .theme-card, .widget-preview, .lang-tag'
    );

    animatedElements.forEach((el, index) => {
        // 设置初始状态
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;

        // 开始观察
        observer.observe(el);
    });
}

// ============================
// 视差效果
// ============================
function initParallaxEffects() {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        // 只在 hero 区域内应用视差效果
        if (scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ============================
// 功能卡片悬停效果增强
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 添加鼠标移动时的光晕效果
            this.addEventListener('mousemove', handleCardMouseMove);
        });

        card.addEventListener('mouseleave', function() {
            this.removeEventListener('mousemove', handleCardMouseMove);
            this.style.background = '';
        });
    });

    function handleCardMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card.style.background = `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(247, 147, 26, 0.1),
            rgba(20, 20, 20, 1) 50%
        )`;
    }
});

// ============================
// 主题卡片交互效果
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const themeCards = document.querySelectorAll('.theme-card');

    themeCards.forEach(card => {
        const preview = card.querySelector('.theme-preview');

        if (preview) {
            card.addEventListener('mouseenter', function() {
                preview.style.transform = 'scale(1.05)';
                preview.style.transition = 'transform 0.3s ease';
            });

            card.addEventListener('mouseleave', function() {
                preview.style.transform = 'scale(1)';
            });
        }
    });
});

// ============================
// 数字动画效果
// ============================
function animateValue(element, start, end, duration, prefix = '', suffix = '') {
    const startTime = performance.now();
    const difference = end - start;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 使用 easeOutExpo 缓动函数
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        const current = start + (difference * easeProgress);
        element.textContent = prefix + formatNumber(current) + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(num);
}

// ============================
// 性能优化：节流函数
// ============================
function throttle(func, wait) {
    let timeout;
    let previous = 0;

    return function executedFunction(...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                previous = Date.now();
                timeout = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}

// ============================
// 性能优化：防抖函数
// ============================
function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================
// 响应式检测
// ============================
function isMobile() {
    return window.innerWidth < 768;
}

function isTablet() {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
}

function isDesktop() {
    return window.innerWidth >= 1024;
}

// 监听窗口大小变化
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 窗口大小变化后的处理
        console.log('Window resized:', window.innerWidth);
    }, 250);
});

// ============================
// 页面加载完成提示
// ============================
window.addEventListener('load', () => {
    console.log('SatsClock website loaded successfully!');
    console.log('Current language:', getCurrentLanguage());
    console.log('Available languages:', getAvailableLanguages());
});

// ============================
// 导出工具函数（用于调试）
// ============================
if (typeof window !== 'undefined') {
    window.SatsClockUtils = {
        animateValue,
        formatNumber,
        isMobile,
        isTablet,
        isDesktop
    };
}
