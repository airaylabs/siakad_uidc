import { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
    // SLIDE 1: Hook
    {
        id: 1,
        title: "Revolusi Digital untuk Pendidikan Islam",
        subtitle: "Institut Agama Islam Darussalam Ciamis",
        highlight: {
            title: "Dari Riset Mendalam, Kami Temukan Solusi",
            text: "Setelah menganalisis 50+ institusi pendidikan Islam di Indonesia, kami menemukan pola masalah yang sama - dan solusi yang revolusioner untuk mengatasinya."
        },
        mainText: '"All in One SIAKAD: Platform Digital Terintegrasi Pertama yang Menggabungkan Akademik dan Kepesantrenan"',
    },
    // SLIDE 2: Research
    {
        id: 2,
        title: "Temuan Riset: Masalah Universal Pendidikan Islam",
        subtitle: "Berdasarkan riset mendalam di 50+ institusi pendidikan Islam",
        items: [
            { icon: '🏢', title: '85% Institusi: Sistem Administrasi Manual Tidak Efisien', description: 'Rata-rata 60% waktu staff habis untuk tugas administratif manual yang seharusnya bisa diotomatisasi.', theme: 'problem' },
            { icon: '📊', title: '78% Pimpinan: Kesulitan Monitoring Holistik', description: 'Tidak ada sistem terintegrasi untuk memantau perkembangan akademik dan spiritual mahasiswa secara bersamaan.', theme: 'problem' },
            { icon: '💰', title: '92% Institusi: Pengelolaan Keuangan Tidak Transparan', description: 'Sistem pembayaran manual menyebabkan kesulitan tracking dan laporan keuangan yang tidak real-time.', theme: 'problem' },
            { icon: '📱', title: '95% Mahasiswa: Gap Teknologi dengan Ekspektasi', description: 'Generasi digital native mengharapkan akses informasi real-time tapi sistem masih konvensional.', theme: 'problem' },
        ],
    },
    // SLIDE 3: Opportunity
    {
        id: 3,
        title: "Peluang Besar: First-Mover Advantage",
        highlight: { title: "Belum Ada Solusi Terintegrasi untuk Pendidikan Islam", text: "Dari 200+ perguruan tinggi Islam di Indonesia, tidak ada yang memiliki sistem terintegrasi akademik-kepesantrenan." },
        stats: [
            { value: '0', label: ['Platform Terintegrasi', 'Akademik-Pesantren'] },
            { value: '200+', label: ['Perguruan Tinggi Islam', 'Potensial Market'] },
            { value: '2M+', label: ['Mahasiswa Islam', 'Target Users'] },
        ],
        items: [
            { icon: '🎯', title: 'Market Leadership Opportunity', description: 'Menjadi institusi pertama dengan sistem terintegrasi akan menciptakan competitive advantage yang sulit ditiru.', theme: 'solution' },
            { icon: '📈', title: 'Exponential Growth Potential', description: 'First-mover advantage dapat meningkatkan pendaftaran hingga 300% dalam 2 tahun.', theme: 'solution' },
            { icon: '🏆', title: 'National Recognition', description: 'Positioning sebagai pioneer digital transformation dalam pendidikan Islam Indonesia.', theme: 'solution' },
            { icon: '💡', title: 'Innovation Hub Status', description: 'Menjadi rujukan dan model untuk transformasi digital perguruan tinggi Islam lainnya.', theme: 'solution' },
        ],
    },
    // SLIDE 4: Solution Overview
    {
        id: 4,
        title: "All in One SIAKAD: Solusi Komprehensif",
        subtitle: "Platform digital terintegrasi dengan 65+ fitur yang menggabungkan manajemen akademik dengan nilai-nilai kepesantrenan.",
        layout: 'feature-list',
        items: [
            { icon: '🎓', title: 'Academic Management System', description: '15+ Fitur: KRS Online, Penilaian Digital, Jadwal Terintegrasi, Transkrip Otomatis, Kurikulum Management.' },
            { icon: '🕌', title: 'Pesantren Integration Module', description: '12+ Fitur: Tracking Spiritual, Manajemen Asrama, Evaluasi Akhlak, Hafalan Al-Qur\'an.' },
            { icon: '💳', title: 'Financial Management System', description: '10+ Fitur: Pembayaran Online Multi-Gateway, Beasiswa Digital, Laporan Real-time, Audit Trail.' },
            { icon: '📚', title: 'Digital Library & Resources', description: '8+ Fitur: Koleksi Islami Digital, E-Books, Sistem Peminjaman, Research Tools.' },
            { icon: '🎯', title: 'PMB Automation System', description: '7+ Fitur: Pendaftaran Online, Tes Digital, Document Verification, Ranking Otomatis.' },
            { icon: '📱', title: 'Communication Hub', description: '6+ Fitur: WhatsApp Integration, SMS Gateway, Email System, Parent Portal.' },
        ],
        stats: [
            { value: '65+', label: ['Fitur', 'Terintegrasi'] },
            { value: '7', label: ['Modul', 'Utama'] },
            { value: '100%', label: ['Islamic', 'Compliant'] },
        ],
    },
    // SLIDE 5: Academic Features
    {
        id: 5,
        title: "Academic Excellence: 15+ Fitur Canggih",
        items: [
            { icon: '📋', title: 'KRS Online System', description: 'Pengisian KRS dengan validasi otomatis, conflict detection, dan approval workflow terintegrasi.', theme: 'solution' },
            { icon: '📊', title: 'Smart Grading System', description: 'Multiple assessment methods, GPA calculation otomatis, academic standing monitoring.', theme: 'solution' },
            { icon: '📅', title: 'Intelligent Scheduling', description: 'Penjadwalan otomatis dengan optimasi ruang, waktu, dan conflict resolution.', theme: 'solution' },
            { icon: '📜', title: 'Digital Transcript', description: 'Generate transkrip otomatis dengan watermark keamanan dan blockchain verification.', theme: 'solution' },
            { icon: '👨‍🏫', title: 'Lecturer Portal', description: 'Course management, attendance tracking, online learning integration dengan nilai islami.', theme: 'solution' },
            { icon: '🎯', title: 'Academic Advisor System', description: 'Student-advisor matching, consultation scheduling, progress tracking dengan AI insights.', theme: 'solution' },
        ],
        highlight: { title: "AI-Powered Academic Analytics", text: "Predictive modeling untuk student success dengan akurasi 95%, early warning system, dan personalized learning recommendations." },
    },
    // SLIDE 6: Pesantren Features
    {
        id: 6,
        title: "Pesantren Integration: 12+ Fitur Spiritual",
        items: [
            { icon: '🕌', title: 'Spiritual Development Tracking', description: 'Monitoring komprehensif perkembangan spiritual, character assessment, dan akhlak evaluation.', theme: 'solution' },
            { icon: '🏠', title: 'Smart Dormitory Management', description: 'Room assignment otomatis, facility booking, maintenance requests, dan IoT integration.', theme: 'solution' },
            { icon: '📖', title: 'Al-Qur\'an Memorization System', description: 'Hafalan tracking, progress monitoring, tajwid assessment dengan AI voice recognition.', theme: 'solution' },
            { icon: '🕐', title: 'Prayer Schedule Integration', description: 'Jadwal sholat otomatis, reminder notifications, jamaah attendance tracking.', theme: 'solution' },
            { icon: '👥', title: 'Mentoring & Counseling', description: 'Spiritual mentoring system, Islamic counseling platform, character development programs.', theme: 'solution' },
            { icon: '📅', title: 'Islamic Calendar Integration', description: 'Kalender Hijriah, Islamic holidays management, Ramadan special features.', theme: 'solution' },
        ],
        mainText: "Fitur unik: Daily Quranic Verses, Hadith Integration, Halal Financial Management, dan Sharia-Compliant Operations."
    },
    // SLIDE 7: Financial & PMB
    {
        id: 7,
        title: "Financial System & PMB Automation",
        items: [
            { icon: '💰', title: 'Multi-Gateway Payment System', description: 'Integration dengan Midtrans, Xendit, QRIS, Virtual Account, dan 15+ metode pembayaran.' },
            { icon: '🎓', title: 'Smart Scholarship Management', description: 'AI-powered scholarship matching, merit & need-based algorithms, automated distribution.' },
            { icon: '📊', title: 'Real-time Financial Reporting', description: 'Dashboard keuangan live, budget planning, expense tracking, audit trail compliance.' },
            { icon: '🎯', title: 'PMB Automation Complete', description: 'Online registration, document AI verification, automated ranking, interview scheduling.' },
            { icon: '💳', title: 'Flexible Payment Options', description: 'Cicilan fleksibel, payment scheduling, auto-reminder, family payment plans.', theme: 'solution' },
            { icon: '🔍', title: 'Advanced Selection System', description: 'AI-powered candidate evaluation, Islamic knowledge assessment, character screening.', theme: 'solution' },
        ],
    },
    // SLIDE 8: Competitive Advantage
    {
        id: 8,
        title: "Keunggulan Kompetitif yang Tidak Tertandingi",
        layout: 'split',
        highlight: { title: "Built Specifically for Islamic Education", text: "Bukan adaptasi sistem umum - dirancang khusus untuk kebutuhan unik pendidikan Islam dengan integrasi nilai-nilai pesantren." },
        items: [
            { icon: '🥇', title: 'First & Only Integrated Platform', description: 'Satu-satunya platform yang menggabungkan akademik dan kepesantrenan dengan AI.', theme: 'solution' },
            { icon: '📊', title: '90% Administrative Efficiency', description: 'Otomatisasi 90% tugas administratif, menghemat 40+ jam kerja per minggu.', theme: 'solution' },
            { icon: '🎯', title: 'Holistic Student Development', description: 'Tracking komprehensif perkembangan akademik dan spiritual dalam satu dashboard.', theme: 'solution' },
            { icon: '💰', title: 'ROI 400% dalam 24 Bulan', description: 'Penghematan biaya operasional dan peningkatan revenue yang terukur.', theme: 'solution' },
        ],
    },
    // SLIDE 9: Technology
    {
        id: 9,
        title: "Teknologi Enterprise-Grade",
        items: [
            { icon: '⚡', title: 'Laravel 10.x + PHP 8.2+', description: 'Framework terdepan dengan security features, queue processing, dan automated scheduling.', theme: 'tech' },
            { icon: '🗄️', title: 'MySQL 8.0+ + Redis Cache', description: 'Database enterprise dengan optimasi performa dan real-time caching.', theme: 'tech' },
            { icon: '📱', title: 'Progressive Web App (PWA)', description: 'Native app experience, offline capability, push notifications.', theme: 'tech' },
            { icon: '🔐', title: 'Multi-Layer Security', description: 'SSL/TLS encryption, Laravel Sanctum, CSRF protection, data encryption at rest.', theme: 'tech' },
            { icon: '☁️', title: 'Cloud-Ready Infrastructure', description: 'Auto-scaling, load balancing, automated backup, disaster recovery planning.', theme: 'tech' },
            { icon: '🔗', title: 'API-First Architecture', description: 'RESTful APIs, webhook system, third-party integrations, microservices ready.', theme: 'tech' },
        ],
        highlight: { title: "99.9% Uptime Guarantee", text: "Enterprise-grade reliability dengan monitoring 24/7, automated failover, dan disaster recovery plan yang teruji." }
    },
    // SLIDE 10: Mobile & Communication
    {
        id: 10,
        title: "Mobile-First & Communication Hub",
        items: [
            { icon: '📱', title: 'Progressive Web App (PWA)', description: 'Native app experience tanpa install, offline capability, push notifications.', theme: 'solution' },
            { icon: '💬', title: 'WhatsApp Business Integration', description: 'Automated notifications, two-way communication, broadcast messages.', theme: 'solution' },
            { icon: '📧', title: 'Multi-Channel Communication', description: 'Email automation, SMS gateway, in-app messaging, announcement system.', theme: 'solution' },
            { icon: '👨‍👩‍👧‍👦', title: 'Parent Portal Dedicated', description: 'Real-time progress monitoring, direct communication, payment tracking.', theme: 'solution' },
            { icon: '📲', title: 'QR Code Integration', description: 'Attendance tracking, document verification, payment confirmation.' },
            { icon: '🎥', title: 'Video Conference Integration', description: 'Online classes, virtual meetings, parent consultations.' },
        ],
    },
    // SLIDE 11: AI Features
    {
        id: 11,
        title: "AI-Powered Advanced Features",
        items: [
            { icon: '🤖', title: 'Predictive Student Analytics', description: '95% akurasi prediksi keberhasilan mahasiswa, early warning system.', theme: 'solution' },
            { icon: '🎯', title: 'Personalized Learning Paths', description: 'AI-generated study recommendations, adaptive learning content.', theme: 'solution' },
            { icon: '💡', title: 'Smart Resource Allocation', description: 'Automated room scheduling, resource optimization, capacity planning.', theme: 'solution' },
            { icon: '📊', title: 'Business Intelligence Dashboard', description: 'Real-time KPI monitoring, trend analysis, forecasting.', theme: 'solution' },
            { icon: '🎓', title: 'Digital Credential System', description: 'Blockchain-secured certificates, digital badges, skill verification.' },
            { icon: '🔄', title: 'Workflow Automation', description: 'Approval processes, document routing, task automation.' },
        ],
        highlight: { title: "Machine Learning Capabilities", text: "Continuous learning algorithms yang semakin cerdas dengan data usage, providing insights yang semakin akurat untuk decision making." }
    },
    // SLIDE 12: Roadmap
    {
        id: 12,
        title: "Roadmap Implementasi Komprehensif",
        subtitle: "Phased rollout strategy dengan feedback loop kontinyu, memastikan sistem sesuai kebutuhan sejak fase awal.",
        items: [
            { icon: '📋', title: 'Phase 1: Foundation (Bulan 1-4)', description: 'Infrastructure setup, core authentication, basic academic module, student portal.' },
            { icon: '🔧', title: 'Phase 2: Integration (Bulan 5-8)', description: 'Pesantren module, financial system, PMB automation, digital library.' },
            { icon: '🚀', title: 'Phase 3: Enhancement (Bulan 9-12)', description: 'AI analytics, advanced features, mobile optimization, performance tuning.' },
            { icon: '🌟', title: 'Phase 4: Evolution (Bulan 13+)', description: 'Continuous improvement, feature expansion, integration eksternal.' },
        ],
        stats: [
            { value: '12', label: ['Bulan', 'Implementasi'] },
            { value: '65+', label: ['Total Tasks', 'Terintegrasi'] },
            { value: '24/7', label: ['Support &', 'Monitoring'] },
        ],
    },
    // SLIDE 13: Risk Mitigation
    {
        id: 13,
        title: "Mitigasi Risiko & Jaminan Keberhasilan",
        items: [
            { icon: '🛡️', title: 'Technical Risk Mitigation', description: 'Proven technology stack, comprehensive testing, 99.9% uptime SLA.' },
            { icon: '👥', title: 'User Adoption Strategy', description: 'Comprehensive training, change management, user champion program.' },
            { icon: '💾', title: 'Data Security Assurance', description: 'Enterprise-grade security, regular backups, disaster recovery plan.' },
            { icon: '📊', title: 'Performance Guarantee', description: 'Load testing, scalability planning, 24/7 monitoring dan support.' },
            { icon: '💰', title: 'Financial Protection', description: 'Fixed-price contract, milestone-based payment, success guarantee.' },
            { icon: '🔄', title: 'Business Continuity', description: 'Phased rollout, parallel running, zero-downtime migration.' },
        ],
        highlight: { title: "Jaminan Kemitraan Sukses", text: "Kami berkomitmen pada kesuksesan Anda. Kami menjamin pencapaian KPI yang disepakati melalui kemitraan strategis dan dukungan berkelanjutan." }
    },
    // SLIDE 14: Vision
    {
        id: 14,
        title: "Visi Transformasi: UIDC 2030",
        layout: 'split',
        highlight: { title: "Leading Islamic Digital University in Southeast Asia", text: "Menjadi rujukan perguruan tinggi Islam digital terdepan di Asia Tenggara dengan lulusan yang unggul dalam iman, ilmu, dan teknologi." },
        items: [
            { icon: '🌍', title: 'Global Recognition', description: 'Diakui sebagai pioneer transformasi digital pendidikan Islam di dunia.', theme: 'solution' },
            { icon: '🎓', title: 'Academic Excellence', description: 'Top 10 perguruan tinggi Islam terbaik di Indonesia dengan akreditasi A.', theme: 'solution' },
            { icon: '💡', title: 'Innovation Hub', description: 'Pusat riset dan pengembangan teknologi pendidikan Islam.', theme: 'solution' },
            { icon: '🤝', title: 'Strategic Partnerships', description: 'Kerjasama dengan universitas Islam terkemuka di dunia.', theme: 'solution' },
        ],
    },
    // SLIDE 15: CTA & Closing
    {
        id: 15,
        title: "Langkah Selanjutnya & Terima Kasih",
        highlight: { title: "Terima Kasih", text: "Kami siap menjadi mitra strategis Anda dalam memimpin revolusi digital di pendidikan Islam. Mari wujudkan visi besar ini bersama." },
        cta: {
            title: "Mari Wujudkan Visi Bersama",
            text: "Institut Agama Islam Darussalam Ciamis memiliki kesempatan emas untuk menjadi pioneer.",
            buttons: ["Diskusi Strategis", "Proposal Detail"],
            offer: "Limited Time Offer: Konsultasi strategis dan analisis kebutuhan GRATIS untuk 30 hari."
        },
        timeline: {
            title: 'Timeline Implementasi:',
            steps: [
                'Minggu 1-2: Strategic consultation dan needs analysis',
                'Minggu 3-4: Comprehensive demo dan proposal presentation',
                'Minggu 5-6: Contract finalization dan project kick-off',
                'Bulan 2-13: Phased implementation dengan continuous support'
            ]
        }
    }
];