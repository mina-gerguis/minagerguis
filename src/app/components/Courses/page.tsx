import Link from "next/link";
import { ArrowLeft, Grid, Code, Database, Palette, Layout, Server, Smartphone, Shield, Zap } from "lucide-react";
import styles from "./courses.module.css";

const courses = [
  {
    id: "all-courses",
    title: "كل الكورسات",
    description: "اطلع على جميع الكورسات المتاحة وابدأ رحلتك التعليمية",
    icon: Grid,
    link: "/components/Courses/data",
    stats: { lessons: "100+", sections: "20+" },
    color: "#9333ea"
  },
  {
    id: "css-course",
    title: "دورة CSS الشاملة",
    description: "تعلم كل شيء عن CSS من الصفر حتى الاحتراف",
    icon: Palette,
    link: "/components/Courses/data/css",
    stats: { lessons: "11", sections: "4" },
    color: "#3b82f6"
  },
  {
    id: "html-course",
    title: "دورة HTML5",
    description: "أساسيات HTML وبناء هيكل صفحات الويب الحديثة",
    icon: Code,
    link: "#",
    stats: { lessons: "15", sections: "5" },
    color: "#f59e0b"
  },
  {
    id: "javascript-course",
    title: "دورة JavaScript",
    description: "تعلم البرمجة بلغة JavaScript من البداية للاحتراف",
    icon: Zap,
    link: "#",
    stats: { lessons: "25", sections: "8" },
    color: "#eab308"
  },
  {
    id: "react-course",
    title: "دورة React",
    description: "بناء تطبيقات ويب تفاعلية باستخدام مكتبة React",
    icon: Layout,
    link: "#",
    stats: { lessons: "20", sections: "7" },
    color: "#06b6d4"
  },
  {
    id: "nodejs-course",
    title: "دورة Node.js",
    description: "تطوير تطبيقات الخادم باستخدام Node.js",
    icon: Server,
    link: "#",
    stats: { lessons: "18", sections: "6" },
    color: "#10b981"
  },
  {
    id: "database-course",
    title: "دورة قواعد البيانات",
    description: "تعلم SQL وإدارة قواعد البيانات",
    icon: Database,
    link: "#",
    stats: { lessons: "12", sections: "4" },
    color: "#8b5cf6"
  },
  {
    id: "responsive-course",
    title: "التصميم المتجاوب",
    description: "تصميم مواقع متجاوبة تعمل على جميع الأجهزة",
    icon: Smartphone,
    link: "#",
    stats: { lessons: "10", sections: "3" },
    color: "#ec4899"
  },
  {
    id: "security-course",
    title: "أمن المواقع",
    description: "حماية تطبيقات الويب من الثغرات الأمنية",
    icon: Shield,
    link: "#",
    stats: { lessons: "14", sections: "5" },
    color: "#ef4444"
  }
];

const Courses = () => {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>الكورسات التعليمية</h2>
        <p className={styles.sectionSubtitle}>
          تعلم تطوير الويب خطوة بخطوة من خلال كورساتنا الشاملة
        </p>
        <div className={styles.coursesGrid}>
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Link key={course.id} href={course.link} className={styles.courseCard}>
                <div className={styles.courseIcon} style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)` }}>
                  <IconComponent size={40} />
                </div>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>
                  {course.description}
                </p>
                <div className={styles.courseStats}>
                  <span className={styles.stat}>{course.stats.lessons} درس</span>
                  <span className={styles.stat}>{course.stats.sections} أقسام</span>
                </div>
                <div className={styles.courseLink} style={{ color: course.color }}>
                  {course.id === "all-courses" ? "عرض الكل" : "ابدأ التعلم الآن"}
                  <ArrowLeft size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;