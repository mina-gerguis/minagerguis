import styles from "./lessons.module.css"
import { IoIosArrowBack } from "react-icons/io";
export default function ColorsLesson() {
    const code = `p {
color: blue;
font-size: 18px;
text-align: center;
}`
    const external = `<link rel="stylesheet" href="style.css">`
    const internal = `<html>
    <head>
        <style> 
            body {
                    background: #f0f0f0;
                    color: #000;
                }
        </style>
    </head>

    <body>
    </body>
</html>`
    const inline = `<h1 style="color: red;">Title</h1>`
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>CSS Overview</h1>
                <h2>تعرف علي لغة الوصف CSS</h2>
            </div>

            <ul className={styles.list}>
                <li>
                    <a href="#1"> <IoIosArrowBack className={styles.icon} />
                        ما هي لغة  <span className={styles.sBlue}> CSS </span> </a>
                </li>
                <li>
                    <a href="#2">  <IoIosArrowBack className={styles.icon} /> وظيفة <span className={styles.sBlue}>CSS</span> الأساسية </a>
                </li>
                <li>
                    <a href="#3">  <IoIosArrowBack className={styles.icon} />كيف تعمل <span className={styles.sBlue}>CSS</span></a>
                </li>
                <li>
                    <a href="#4">  <IoIosArrowBack className={styles.icon} /> طرق إدراج <span className={styles.sBlue}>CSS</span></a>
                </li>
                <li>
                    <a href="#5">  <IoIosArrowBack className={styles.icon} />أهمية <span className={styles.sBlue}>CSS</span></a>
                </li>
                <li>
                    <a href="#6">  <IoIosArrowBack className={styles.icon} />معلومات قبل الغوص في <span className={styles.sBlue}>CSS</span></a>
                </li>
                <li>
                    <a href="#7">  <IoIosArrowBack className={styles.icon} />لمن هذا المرجع ولمن المستفاد ؟</a>
                </li>
                <li>
                    <a href="#7">  <IoIosArrowBack className={styles.icon} />خطة الدراسة في هذا المرجع</a>
                </li>
            </ul>
            <div className={styles.content} id="1">
                <h2 className={styles.titleMain}>ما هي لغة CSS</h2>
                <p>
                    CSS اختصار لـ <span>(Cascading Style Sheets)</span> هي لغة تنسيق وتصميم تُستخدم لتحديد الشكل والمظهر البصري لمحتوى صفحات الويب المكتوبة بلغات مثل <span>HTML</span>.
                    تتحكم الـ <span>CSS</span> في الألوان، والخطوط، والأحجام، والتباعد، والمحاذاة، والتخطيطات، بالإضافة إلى تأثيرات الحركة والتجاوب مع أحجام الشاشات المختلفة.
                </p>
            </div>

            <div className={styles.content} id="2">
                <h2 className={styles.titleMain}>وظيفة CSS الأساسية</h2>
                <p>
                    <span>CSS</span> لا تضيف محتوى جديدًا للصفحة، بل تتحكم في كيف يبدو المحتوى للمستخدم.
                    على سبيل المثال:</p>
                <ul>
                    <li>تحديد لون النص والخلفية.</li>
                    <li>ضبط المسافات بين العناصر (Margins / Paddings).</li>
                    <li> ترتيب العناصر على الصفحة باستخدام Flexbox أو Grid.</li>
                    <li> جعل الموقع متجاوبًا (Responsive) ليظهر بشكل مناسب على الهواتف، التابلت، والحواسيب.
                    </li>
                    <li>إضافة تأثيرات انتقال (Transitions) أو تحريك (Animations).</li>
                </ul>
            </div>

            <div className={styles.content} id="3">
                <h2 className={styles.titleMain}>كيف تعمل CSS</h2>
                <p>
                    تعمل CSS من خلال ربط القواعد <span>(Rules)</span> بعناصر <span>HTML</span>.
                    كل قاعدة تتكون من:</p>
                <ul>
                    <li> <span>مُحدد (Selector)</span>: يحدد العنصر الذي نريد تنسيقه (مثل p, div, .class, #id).</li>
                    <li><span>خاصية (Property)</span>: تحدد الجزء الذي نريد تغييره (مثل color, font-size, background).
                    </li>
                    <li> <span>قيمة (Value)</span>: تحدد شكل التغيير (مثل red, 16px, center).</li>
                </ul>
                <div className={styles.code}>
                    <pre>
                        <code>
                            {code}
                        </code>
                    </pre>
                    <p> - هذا الكود يجعل كل الفقرات باللون الأزرق، حجم خط 18px، ومحاذاة في المنتصف.</p>
                </div>
            </div>

            <div className={styles.content} id="4">
                <h2>طرق إدراج CSS</h2>
                <p>
                    يمكن ربط ملف <span>CSS</span> بملف الـ <span>HTML</span> بثلاث طرق :
                </p>
                <ul>
                    <li><span>خارجيًا</span>في ملف مستقل <code>(style.css)</code> يتم ربطه بصفحة HTML.</li>
                    <pre>
                        <code>
                            {external}
                        </code>
                    </pre>
                    <li><span>داخليًا</span>داخل وسم <code>&lt;style&gt;</code> في رأس الصفحة.</li>
                    <pre>
                        <code>
                            {internal}
                        </code>
                    </pre>
                    <li><span>ضمني (Inline)</span>مباشرة داخل العنصر</li>
                    <pre>
                        <code>{inline}</code>
                    </pre>
                </ul>
            </div>

            <div className={styles.content} id="5">
                <h2>أهمية CSS</h2>
                <p>
                    تُعد CSS جزء أساسي من تطوير واجهات المواقع، لأنها المسؤولة عن مظهر الصفحات وطريقة عرض المحتوى للمستخدم. أهميتها تظهر في:
                </p>
                <span>1. التحكم في الشكل والتصميم</span>
                <ul>
                    <li>تحديد ألوان النص والخلفيات </li>
                    <li>تغيير الأحجام والمسافات والخطوط</li>
                    <li> ضبط المحاذاة وترتيب العناصر</li>
                </ul>
                <span>2. جعل الموقع منظم ومريح بصريًا</span>
                <ul>
                    <li>تمنح الصفحات شكل متناسق واحترافي</li>
                    <li>ترتيب العناصر بشكل واضح يسهل على المستخدم التصفح</li>
                    <li>تجربة استخدام مريحة بدلاً من نصوص وعناصر عشوائية</li>
                </ul>

                <span>3. تصميم واجهات متجاوبة (Responsive)</span>
                <ul>
                    <li>جعل الموقع يعمل بشكل ممتاز على الهاتف والتابلت والكمبيوتر</li>
                    <li>التعديل حسب أحجام الشاشات باستخدام Media Queries</li>
                    <li>استخدام أدوات حديثة مثل Flexbox و CSS Grid</li>
                </ul>

                <span>4. إضافة تأثيرات وتحسين تجربة المستخدم</span>
                <ul>
                    <li>إضافة حركات بسيطة مثل Hover و Transitions</li>
                    <li>إظهار العناصر بشكل تدريجي عبر Animations</li>
                    <li>جعل الموقع أكثر تفاعلًا وجاذبية</li>
                </ul>

                <span>5. فصل التنسيق عن المحتوى</span>
                <ul>
                    <li>HTML لكتابة المحتوى</li>
                    <li>CSS لتنسيقه وتجهيزه للعرض</li>
                    <li>يسهل تعديل التصميم دون المساس بالمحتوى</li>
                </ul>

                <span>6. سهولة إعادة الاستخدام والسرعة</span>
                <ul>
                    <li>ملف CSS واحد يمكن استخدامه في عدة صفحات</li>
                    <li>أي تعديل بسيط ينعكس على الموقع بالكامل</li>
                    <li>تقليل تكرار الكود وتحسين الأداء</li>
                </ul>
            </div>

            <div className={styles.content} id="6">
                <h2>معلومات قبل الغوص في CSS</h2>
                <p> قبل ما نبدأ نتعمق في كتابة أكواد CSS، في شوية حاجات مهمة لازم تعرفها علشان تفهم اللغة بشكل صحيح وتستفيد منها بكفاءة: </p>

                <span>1. CSS لا تعمل وحدها</span>
                <li>
                    لازم يكون فيه هيكل مكتوب بـ <span>HTML</span> علشان <span>CSS</span> تقدر تطبق التنسيقات عليه.
                </li>

                <span>2. نفس العنصر قد يحصل على أكثر من تنسيق</span>

                <ul> <li>العنصر ممكن يتأثر بأكثر من ملف أو أكثر من كود CSS في نفس الصفحة.</li> <li>هنا ييجي دور مبدأ <span>⚡ Specificity</span> لتحديد أي ستايل يتطبق.</li> </ul>

                <span>3. المتصفح يقرأ CSS من الأعلى للأسفل</span>

                <ul> <li>لو كتبت تنسيقين لنفس العنصر، آخر واحد هو اللي هيطبّق إلا في حالات خاصة.</li> </ul>

                <span>4. ممكن تربط CSS بصفحة HTML بأكثر من طريقة</span>

                <ul> <li>داخل الملف نفسه باستخدام <code>&lt;style&gt;</code></li> <li>ملف خارجي مثل <code>style.css</code> (أفضل وأرتب)</li> <li>داخل العنصر نفسه باستخدام <code>style</code> (مش مفضل)</li> </ul>

                <span>5. CSS لغة شجرة (Cascading)</span>

                <ul> <li>يعني التنسيقات ممكن تورّث من عنصر لعنصر داخل نفس الهيكل.</li> <li>مثال: لو غيرت لون الخط في <code>body</code>، هيأثر على كل النصوص بداخله إلا لو تم تغييره بشكل خاص.</li> </ul>
            </div>

            <div className={styles.content} id="7">
                <h2>✅ لمن تم إعداد هذا المرجع؟</h2>
                <p> تم إعداد هذا المرجع ليكون دليلًا بسيطًا ومباشرًا لكل شخص يرغب في تعلم <span>CSS</span> بسهولة، سواء كان: </p> <ul> <li>مبتدئ يدخل عالم تطوير الويب لأول مرة.</li> <li>طالب جامعي أو دارس في مجال علوم الحاسب.</li> <li>مطور يعرف HTML ويريد الانتقال لمستوى أعلى بتنسيق وتصميم الصفحات.</li> <li>مصمم واجهات (UI) يرغب في تحويل التصاميم إلى صفحات تعمل على المتصفح.</li> <li>أي شخص يريد بناء موقع جذاب ومتجاوب بدون تعقيد.</li> </ul> <p> تم تنظيم الدروس بشكل تدريجي وبأمثلة عملية حتى يستفيد منها الجميع مهما كان مستوى خبرتهم. </p>
            </div>

            <div className={styles.content} id="8">
                <h2>✅ خطة الدراسة في هذا المرجع</h2>
                <p>
                    تم تصميم خطة الدراسة بحيث تنتقل من الأساسيات إلى الاحتراف بشكل تدريجي وعملي، دون أي تعقيد.
                    ستتعلّم كل جزء من CSS مع أمثلة حقيقية وتطبيقات تساعدك على الفهم والتطبيق فورًا.
                </p>

                <h4>المرحلة الأولى: الأساسيات (Basics)</h4>
                <p>في هذه المرحلة ستتعرف على أساسيات CSS وطريقة عملها مع عناصر HTML.</p>
                <ul>
                    <li>ما هي CSS وكيف تعمل؟</li>
                    <li>أشكال تضمين CSS في الصفحات (inline – internal – external)</li>
                    <li>المحددات Selectors</li>
                    <li>الألوان</li>
                    <li>الخطوط</li>
                    <li>المسافات (Margins – Padding)</li>
                    <li>الإطارات Borders</li>
                </ul>

                <h4>المرحلة الثانية: تنسيق العناصر (Layout & Styling)</h4>
                <p>هتتعلم فيها التحكم في توزيع العناصر على الصفحة وشكلها الداخلي والخارجي.</p>
                <ul>
                    <li>Display (block – inline – inline-block)</li>
                    <li>Box Model</li>
                    <li>الظلال Shadow</li>
                    <li>الزوايا الدائرية Border Radius</li>
                    <li>الخلفيات Background</li>
                </ul>

                <h4>المرحلة الثالثة: تقنيات التنسيق الحديثة</h4>
                <p>هتتعرف على أدوات قوية تستخدم في تصميم المواقع الاحترافية.</p>
                <ul>
                    <li>Flexbox</li>
                    <li>CSS Grid</li>
                    <li>Position (absolute – relative – fixed – sticky)</li>
                </ul>

                <h4>المرحلة الرابعة: التفاعل والانتقالات</h4>
                <p>كيف تجعل الموقع أكثر سلاسة وجاذبية.</p>
                <ul>
                    <li>Transitions</li>
                    <li>Animations</li>
                    <li>Hover & Active Effects</li>
                </ul>

                <h4>المرحلة الخامسة: التصميم المتجاوب (Responsive Design)</h4>
                <p>لتشغيل الموقع على مختلف الأجهزة بدون مشاكل.</p>
                <ul>
                    <li>Media Queries</li>
                    <li>وحدات القياس (px – % – rem – vw – vh)</li>
                    <li>تقنيات التصميم المرن</li>
                </ul>

                <h4>المرحلة السادسة: مشروع تطبيقي</h4>
                <p>
                    في نهاية المرجع ستقوم ببناء صفحة أو موقع بسيط باستخدام كل ما تعلمته،
                    حتى تنتقل من مرحلة التعلم إلى مرحلة التطبيق الفعلي.
                </p>

            </div>
        </div>
    );
}