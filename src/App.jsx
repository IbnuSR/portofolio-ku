import { motion } from "framer-motion";
import "./App.css";

// Variabel untuk animasi berurutan (Stagger) pada bagian Proyek
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 } // Jeda waktu antar kartu
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

function App() {
  return (
    <>
      {/* --- NAVBAR --- */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        <h2>Ibnu.Dev</h2>
        <div className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak">Kontak</a>
        </div>
      </motion.nav>

      {/* --- BAGIAN BERANDA --- */}
      <section id="beranda" className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">Halo, Saya <span>Ibnu Sabilul Rosad</span></h1>
        </motion.div>

        {/* Animasi muncul dari sebelah kanan */}
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seorang Web Developer yang bersemangat membangun website interaktif dengan performa tinggi dan desain modern.
        </motion.p>

        {/* Animasi tombol berkedut dan membesar */}
        <motion.button 
          className="btn-primary"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Mari Berdiskusi
        </motion.button>
      </section>

      {/* --- BAGIAN PROYEK --- */}
      <section id="proyek" className="section" style={{ backgroundColor: "#0f0a1c" }}>
        {/* whileInView membuat animasi berjalan setiap kali di-scroll ke area ini */}
        <motion.h2 
          style={{ fontSize: "2.5rem", marginBottom: "10px" }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Karya Terbaik Saya
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Kartu Proyek 1 */}
          <motion.div 
            className="card" 
            variants={cardVariants}
            whileHover={{ y: -10, rotate: -2, scale: 1.03 }} // Efek 3D miring saat di-hover
          >
            <h3>Aplikasi Kasir</h3>
            <p>Sistem manajemen toko modern menggunakan React dan integrasi database realtime. Tampilan responsif dan sangat cepat.</p>
          </motion.div>

          {/* Kartu Proyek 2 */}
          <motion.div 
            className="card" 
            variants={cardVariants}
            whileHover={{ y: -10, rotate: 2, scale: 1.03 }}
          >
            <h3>Dashboard Admin</h3>
            <p>Panel analitik dengan grafik interaktif dan mode gelap. Dibangun dengan fokus pada pengalaman pengguna (UX) tingkat eksekutif.</p>
          </motion.div>
          
          {/* Kartu Proyek 3 */}
          <motion.div 
            className="card" 
            variants={cardVariants}
            whileHover={{ y: -10, rotate: -2, scale: 1.03 }}
          >
            <h3>Toko Online</h3>
            <p>E-commerce minimalis dengan fitur keranjang animasi dan checkout instan. Performa dioptimalkan untuk SEO.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- BAGIAN KONTAK --- */}
      <section id="kontak" className="section">
        <motion.h2 
          style={{ fontSize: "2.5rem", marginBottom: "20px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
        >
          Tertarik Bekerja Sama?
        </motion.h2>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Jangan ragu untuk menyapa. Saya selalu terbuka untuk mendiskusikan ide proyek baru atau peluang kolaborasi.
        </motion.p>
        <motion.a 
          href="mailto:emailkamu@gmail.com"
          className="btn-primary"
          style={{ textDecoration: "none", display: "inline-block" }}
          whileHover={{ scale: 1.1, backgroundColor: "#a855f7" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Kirim Pesan
        </motion.a>
      </section>

      {/* --- FOOTER --- */}
      <footer>
        <p>© 2026 Ibnu Sabilul. Dibuat dengan 💜 dan React.</p>
      </footer>
    </>
  );
}

export default App;