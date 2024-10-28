-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 25 Okt 2024 pada 23.57
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `osi-2024`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `email`, `password`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'Admin1', 'admin1', 'admin1@gmail.com', '$2y$12$bG0.RFnlQD4ox4zXkOHrQ.gEU37w7nM0QORBSuHDMeqIUUKqykgeG', '08123456789', '2024-10-02 22:53:34', '2024-10-02 22:53:34'),
(2, 'Admin 2', 'admin2', 'admin2@gmail.com', '$2y$12$GWf5zPFKJORYfpm54NHtEOplVjo2U9gqRWlHlHGpt1D52OM5qvQSq', '08123456709', '2024-10-02 22:54:48', '2024-10-02 22:54:48');

-- --------------------------------------------------------

--
-- Struktur dari tabel `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `keyword_blog_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `images_blog` varchar(255) DEFAULT NULL,
  `date` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `blogs`
--

INSERT INTO `blogs` (`id`, `keyword_blog_id`, `title`, `description`, `images_blog`, `date`, `created_at`, `updated_at`) VALUES
(5, 1, '6 Tools UI/UX Design yang Sering Dipakai Designer', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/3lgkn6RxWkFmVD1wAFpoy9Ywg2uAUYlSQgrO5wts.png', '2024-10-16', '2024-10-16 01:30:40', '2024-10-16 01:30:40'),
(6, 2, 'Mengenal Next.js: Framework JavaScript untuk Pengembangan Web Modern', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p><br/>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p><br/>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1><br/>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/WkA8Siq3DsX4pbWNwVYL3lc5SuRH3RfRf5GSjzys.png', '2024-10-15', '2024-10-16 01:39:04', '2024-10-16 01:39:04'),
(7, 3, 'Vue 3: Fitur dan Keunggulan Terbaru yang Harus Anda Ketahui', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/JqDYQwvUcSibKitocAb89hRyJREfDDBy5hjzYM8B.png', '2024-10-14', '2024-10-16 01:41:20', '2024-10-16 01:41:20'),
(8, 1, 'Exploring React.js: Building Dynamic User Interfaces with Ease', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/xNvw25P5mHpc6oXdPZETEpTn8pMFwetXEaXUAUYZ.png', '2024-10-13', '2024-10-16 02:11:41', '2024-10-16 02:11:41'),
(9, 2, 'Kali Linux: The Ultimate Penetration Testing OS for Cybersecurity Experts', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/FvhH6yNIbVIMlMu6VWBFp0ezLUMbFBe1KV4aNpVz.png', '2024-10-12', '2024-10-16 02:14:46', '2024-10-16 02:14:46'),
(12, 2, '3 Tools UI/UX Design yang Sering Dipakai Designer', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/pFwwi4oriNnSWwXsl0qytqI7Z7EdVOc45dIvPeoo.png', '2024-10-16', '2024-10-21 01:38:05', '2024-10-21 01:38:05'),
(13, 3, '8 Tools UI/UX Design yang Sering Dipakai Designer', '<div>  <p>\n    UI/UX memiliki peranan yang sangat penting dalam pembuatan\n    sebuah aplikasi. UI berfokus pada antarmuka pengguna dan\n    berhubungan dengan sisi estetika suatu desain, sedangkan\n    UX Lorem ipsum odor amet, consectetuer adipiscing elit.\n    Iaculis congue varius tincidunt cras molestie diam amet.\n    Volutpat maecenas praesent litora molestie consectetur\n    hendrerit. Fusce est auctor non imperdiet dapibus\n    sociosqu. Sodales donec praesent laoreet odio justo.\n    Cursus habitant habitant blandit nostra nullam pharetra.\n    Proin amet sit felis ac gravida est porta.\n  </p>\n  <p>\n    Eleifend quis velit urna; et arcu montes platea. Sed\n    sodales eu viverra curabitur feugiat etiam elit.\n    Suspendisse ultricies orci elit; primis a habitasse urna\n    montes. Eleifend fermentum nullam aliquam habitant\n    faucibus nisl. Purus erat luctus fusce lectus cursus in\n    auctor nec. Tempor tempor mus pretium, ullamcorper aptent\n    suscipit dolor. Nisl molestie elit aenean ac vulputate\n    sem. Odio per cursus habitasse ut dictum hendrerit.\n    Faucibus at posuere curae montes senectus ante conubia\n    taciti. Augue curae ante urna nunc massa leo vivamus enim.\n  </p>\n  <h1 class=\"text-2xl font-semibold\">\n    1. Adobe Illustrator\n  </h1>\n  <p>\n    Urna porta arcu malesuada duis ut tempor. Aliquam felis\n    nullam velit eleifend et fames sollicitudin bibendum at.\n    Vehicula eleifend vulputate penatibus in; elit nisi\n    luctus? Sapien et porttitor vulputate sodales nulla\n    facilisis? Proin dolor magnis imperdiet; lacinia penatibus\n    faucibus class. Pharetra lobortis mattis feugiat ultrices,\n    hac pulvinar. Augue convallis enim metus tristique\n    bibendum ex dolor. Amet adipiscing ipsum at, dis nascetur\n    tempor vivamus nisl.\n  </p>\n</div>', 'blogs/nVvAOyazIIKZ5kHPNwwpO9IuRv87lYt7PIeCReL4.png', '2024-10-16', '2024-10-21 01:38:45', '2024-10-21 01:38:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `careers`
--

CREATE TABLE `careers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `images_career` varchar(255) DEFAULT NULL,
  `description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `careers`
--

INSERT INTO `careers` (`id`, `name`, `images_career`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Digital Marketing', 'careers/sQdYpM1LoDJYEEZCpzHpGxdnSFp34gFYK4uUexvY.jpg', 'Digital Marketing adalah strategi pemasaran yang menggunakan platform digital dan teknologi berbasis internet untuk mempromosikan produk, layanan, atau merek kepada audiens yang luas. Digital marketing mencakup berbagai metode dan teknik pemasaran yang memanfaatkan kanal digital seperti mesin pencari, media sosial, email, situs web, dan aplikasi mobile.', '2024-10-18 00:20:04', '2024-10-18 00:20:04'),
(2, 'Web Developer', 'careers/wARnR06iugK7pacgtMYQfdLlHCOdvTFFKIFLuVw9.jpg', 'web developer adalah profesional yang bertanggung jawab untuk membangun dan mengembangkan situs web. Mereka bekerja dengan bahasa pemrograman, alat, dan teknologi untuk membuat situs web yang fungsional, menarik, dan dapat diakses. Web developer biasanya bekerja di balik layar untuk memastikan situs dapat beroperasi dengan lancar dan sesuai dengan kebutuhan pengguna atau klien.', '2024-10-18 00:36:19', '2024-10-18 00:36:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image_activity1` varchar(255) DEFAULT NULL,
  `image_activity2` varchar(255) DEFAULT NULL,
  `image_activity3` varchar(255) DEFAULT NULL,
  `image_activity4` varchar(255) DEFAULT NULL,
  `image_activity5` varchar(255) DEFAULT NULL,
  `image_activity6` varchar(255) DEFAULT NULL,
  `image_activity7` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `galleries`
--

INSERT INTO `galleries` (`id`, `image_activity1`, `image_activity2`, `image_activity3`, `image_activity4`, `image_activity5`, `image_activity6`, `image_activity7`, `created_at`, `updated_at`) VALUES
(1, 'gallery/WnLqga3GcD3gUfLNDaKDek4Se4qXL5jx1gnqmiea.jpg', 'gallery/Hu6cxmqdHP0GWFJ7atpK8jorldQO6yLla5PdZzm2.jpg', 'gallery/j0b83uwCknh09e5X7xp5wsfyYwsXRXkFkpgccVap.png', 'gallery/jaXDQWo2LTy1VEK8zx9mre4gmerf629ZW1482iOx.jpg', 'gallery/RYGuB9A22dnWmFYvrpVO3qjtNTXNNKIwrqZGuMq1.jpg', 'gallery/nFR8jXN4k5qWmeQKTZdUzFOaLr9zLPzL1nOfBiE2.jpg', 'gallery/AliShoF31xQ5GgcVBC8fxdjfHj3lwPSFeGfuHemZ.jpg', '2024-10-14 00:40:29', '2024-10-14 00:40:29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keyword_blogs`
--

CREATE TABLE `keyword_blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_keyword` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `keyword_blogs`
--

INSERT INTO `keyword_blogs` (`id`, `name_keyword`, `created_at`, `updated_at`) VALUES
(1, 'Design UI/UX', '2024-10-25 00:38:33', '2024-10-25 00:38:33'),
(2, 'Web Development', '2024-10-25 00:39:36', '2024-10-25 00:39:36'),
(3, 'IOT', '2024-10-25 00:39:46', '2024-10-25 00:39:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_10_03_053619_create_admins_table', 1),
(3, '2024_10_07_080156_create_settings_table', 2),
(4, '2024_10_08_061409_create_settings_table', 3),
(5, '2024_10_08_065525_create_settings_table', 4),
(6, '2024_10_08_081945_create_project_categories_table', 5),
(7, '2024_10_08_082204_create_perusahaans_table', 6),
(8, '2024_10_08_082407_create_projects_table', 7),
(9, '2024_10_09_112103_create_service_types_table', 8),
(10, '2024_10_10_085530_create_team_members_table', 9),
(11, '2024_10_14_064533_create_galleries_table', 10),
(12, '2024_10_14_072631_create_galleries_table', 11),
(13, '2024_10_14_091848_create_superiorities_table', 12),
(14, '2024_10_15_062833_create_projects_table', 13),
(15, '2024_10_15_064143_create_projects_table', 14),
(16, '2024_10_15_064712_add_project_id_to_superiorities_table', 15),
(17, '2024_10_16_065021_create_superiorities_table', 16),
(18, '2024_10_16_065959_create_project_superiority_table', 17),
(19, '2024_10_16_075352_create_blogs_table', 18),
(20, '2024_10_18_070550_create_careers_table', 19),
(21, '2024_10_18_081426_create_vacancies_table', 20),
(22, '2024_10_20_004036_create_technology_categories_table', 21),
(23, '2024_10_20_005237_create_technologies_table', 22),
(24, '2024_10_22_065824_create_services_table', 23),
(25, '2024_10_24_053837_create_keyword_blogs_table', 23),
(26, '2024_10_24_060500_add_keyword_blog_id_to_blogs_table', 23);

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Admin', 1, 'auth_token', 'ba6e7680f4b226f572ee4eb3370f6b3ed7af454d488e87212718799e0a69cdfe', '[\"*\"]', NULL, NULL, '2024-10-02 22:57:03', '2024-10-02 22:57:03'),
(2, 'App\\Models\\Admin', 1, 'auth_token', '5791209f03558f2947fabd6b0e3d48bf7b3df4d0e6b5024d9be1ab1e75e339ee', '[\"*\"]', NULL, NULL, '2024-10-02 22:59:40', '2024-10-02 22:59:40'),
(3, 'App\\Models\\Admin', 2, 'auth_token', 'da0e1723ac37774a1489fb48073739a063c8a4300db0c0925b375e476ede698d', '[\"*\"]', NULL, NULL, '2024-10-02 22:59:51', '2024-10-02 22:59:51'),
(4, 'App\\Models\\Admin', 2, 'auth_token', '3b096b1fa172b14e071d55ef41f1c81279f531a0e580a1065e74c293ad24885e', '[\"*\"]', NULL, NULL, '2024-10-02 23:16:11', '2024-10-02 23:16:11'),
(5, 'App\\Models\\Admin', 2, 'auth_token', '22793c25105b85cf17322cc1aa94fd2e9698ced6d42fe3894de76a7edecbf12c', '[\"*\"]', NULL, NULL, '2024-10-02 23:22:27', '2024-10-02 23:22:27'),
(6, 'App\\Models\\Admin', 2, 'auth_token', '236fbac3b00882354ad83ba5ad74a6b471c7cce1ce36a6a2ed07aecad05f14fb', '[\"*\"]', NULL, NULL, '2024-10-02 23:23:14', '2024-10-02 23:23:14'),
(7, 'App\\Models\\Admin', 2, 'auth_token', 'b589afaeac05b0f22ccc5242cce8dc4554a98676f6502c152b4368fa3f2f2220', '[\"*\"]', NULL, NULL, '2024-10-02 23:23:34', '2024-10-02 23:23:34'),
(8, 'App\\Models\\Admin', 1, 'auth_token', '2cc0a4e90ef32e91604c050dca81d6858951fc135075733a50fd4dd57cb5b536', '[\"*\"]', NULL, NULL, '2024-10-02 23:25:40', '2024-10-02 23:25:40'),
(9, 'App\\Models\\Admin', 2, 'auth_token', '0ae67dee9e83689ae26ec9f58035b72c875c71d3982beac6eb63894d6c71db77', '[\"*\"]', '2024-10-02 23:28:57', NULL, '2024-10-02 23:28:55', '2024-10-02 23:28:57'),
(10, 'App\\Models\\Admin', 2, 'auth_token', '0c6a40d707a7af4e200e276bfdec954424a5467394966e13169629d4ea38eff3', '[\"*\"]', '2024-10-02 23:34:58', NULL, '2024-10-02 23:31:00', '2024-10-02 23:34:58'),
(13, 'App\\Models\\Admin', 2, 'auth_token', '5cca77f6e54b92e2f34ad86e2588b897745fd7b0bd9ef880a18507ec5713ad04', '[\"*\"]', '2024-10-02 23:43:36', NULL, '2024-10-02 23:43:34', '2024-10-02 23:43:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `perusahaans`
--

CREATE TABLE `perusahaans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_perusahaan` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `testimony` text DEFAULT NULL,
  `nama_client` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `perusahaans`
--

INSERT INTO `perusahaans` (`id`, `nama_perusahaan`, `logo`, `testimony`, `nama_client`, `role`, `created_at`, `updated_at`) VALUES
(1, 'TELKOMSEL', 'logos/SA2Pxc067eQIpZMuL62xD0Uz5LnuZh6jaJyCdpz4.png', '\"Kualitas pelayanan sangat baik\"', 'Afkar triwardana', 'Web Developer', '2024-10-08 02:23:24', '2024-10-08 02:23:24'),
(2, 'POLRES LAMPUNG', 'logos/jlfzYmV3Lia3kCUqyuMKQI6kIzT2ohBqfOs02XRf.png', '\"Kualitas pelayanan baik\"', 'Shafa', 'UI/UX Designer', '2024-10-08 02:26:58', '2024-10-08 02:26:58'),
(3, 'MABES POLRI', 'logos/Sja22v2MGeg1K60DJeNFkyeGz9KygGlF36ADJCcF.png', '\"Kualitas pelayanan sangat baik\"', 'Iqbal Farhan', 'Web Developer', '2024-10-21 00:39:18', '2024-10-21 00:39:18'),
(4, 'POLRESTA BOGOR', 'logos/AP603anK7TPb5by1jVUWf5sO8t8cHM09WAhXFTj9.png', '\"Kualitas pelayanan sangat baik\"', 'Najwa', 'Web Developer', '2024-10-21 00:52:09', '2024-10-21 00:52:09'),
(5, 'POLDA KALSEL', 'logos/Fd0QYeVubJK3BUqLwTJEP7DAhRNuu7Wb3TfgVUlt.png', '\"Kualitas pelayanan sangat baik\"', 'Iqbal Farhan', 'Web Developer', '2024-10-21 00:52:53', '2024-10-21 00:52:53'),
(6, 'KEJAKSAAN SLEMAN', 'logos/vtNAb5qWNa5twLoBdCVXRNsBmOYL36szc80epBOl.png', '\"Kualitas pelayanan sangat baik\"', 'Leonel Messi', 'Web Developer', '2024-10-21 00:53:55', '2024-10-21 00:53:55'),
(7, 'TOYOTA', 'logos/77gVzx1Rqhw85EuTQQvylyAbRaZi5QeGr5s0kbZe.png', '\"Kualitas pelayanan sangat baik\"', 'Najwa', 'Web Developer', '2024-10-21 00:54:44', '2024-10-21 00:54:44'),
(8, 'POLRES SELUMAN', 'logos/WAm14sKR6nKoN2IFdCydiUzsKozyZb50f0qctwIq.png', '\"Kualitas pelayanan sangat baik\"', 'Leonel Messi', 'Web Developer', '2024-10-21 00:56:36', '2024-10-21 00:56:36'),
(9, 'POLRES ROKAN HILIR', 'logos/8BqxOk0ApteuumgnTQgtv2Sc5MUtmt4y7XFo8j07.png', '\"Kualitas pelayanan sangat baik\"', 'Iqbal Farhan', 'Web Developer', '2024-10-21 00:57:31', '2024-10-21 00:57:31'),
(10, 'POLRES', 'logos/EMy8ushsgBnbcE8N6rTLUep2fsI8SAib5fWIYJhB.png', '\"Kualitas pelayanan sangat baik\"', 'Leonel Messi', 'Web Developer', '2024-10-21 01:01:48', '2024-10-21 01:01:48'),
(11, 'POLRES', 'logos/dQWskLaWvc0djSaGDINtW7tbSfufVycTCt9ApCTN.png', '\"Kualitas pelayanan sangat baik\"', 'Najwa', 'Web Developer', '2024-10-21 01:01:50', '2024-10-21 01:01:50'),
(12, 'POLRES', 'logos/rAKw9NdnusLilVYyPK7DdG7hgDaUQZGvaQKtmyT9.png', '\"Kualitas pelayanan sangat baik\"', 'Iqbal Farhan', 'Web Developer', '2024-10-21 01:02:31', '2024-10-21 01:02:31'),
(13, 'POLRES', 'logos/0CJbRZxkIaVuAubhHZSS9vareZM0JwGf5uK2kRP5.png', '\"Kualitas pelayanan sangat baik\"', 'Najwa', 'Web Developer', '2024-10-21 01:02:34', '2024-10-21 01:02:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects` (
  `id_project` bigint(20) UNSIGNED NOT NULL,
  `name_project` varchar(255) NOT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `perusahaan_id` bigint(20) UNSIGNED NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `description1` text DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `picture01` varchar(255) DEFAULT NULL,
  `picture02` varchar(255) DEFAULT NULL,
  `picture03` varchar(255) DEFAULT NULL,
  `picture04` varchar(255) DEFAULT NULL,
  `description2` text DEFAULT NULL,
  `description3` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`id_project`, `name_project`, `sub_title`, `category_id`, `perusahaan_id`, `picture`, `description1`, `tanggal`, `picture01`, `picture02`, `picture03`, `picture04`, `description2`, `description3`, `created_at`, `updated_at`) VALUES
(1, 'DesignKit', 'Best service', 1, 1, 'projects/4Ux2E1ZTr95B7FS02WYr9Xbk9ZB1X5L9iFgNTHvT.png', 'DesignKit is a tool for UI/UX designers that offers a simple and intuitive interface for creating app and website design prototypes. With a library of components and ready-to-use templates, users can quickly build wireframes and layouts with ease.', '2024-10-15', 'projects/ZuPEgQRzegX9Y23gGZU5GqDfRoRuVRMvSjd6UuSm.png', 'projects/zzWjxc2kBviCiStonLa0eoKuHNsL9MSl0Ci3gBJ2.png', 'projects/il8EhADu762BRO8xMGM7CNy0KsxozMBd4PLyvvmf.jpg', 'projects/VHRTgFnWOEGFKuH7saP11XsfEEbyU6bfB1HyaE9n.jpg', 'DesignKit is designed to make it easy for designers to create interactive prototypes that can be tested directly on mobile or desktop devices. The tool also supports real-time collaboration between design and development teams, accelerating the product development cycle.', 'The main advantages of DesignKit include its ability to facilitate real-time collaboration, a drag-and-drop interface, and integration with various other design software such as Figma and Adobe XD. Additionally, its UI is designed to minimize the number of clicks and time required to create prototypes.', '2024-10-15 00:17:19', '2024-10-15 00:17:19'),
(2, 'FitLife', 'Best service', 2, 2, 'projects/5R4WPm1qaJpjomUxeblSU1VXFwQ57Mcn2ldy09Xq.png', 'FitLife is a fitness app designed to provide a personalized experience for each user based on their health goals and lifestyle. The app allows users to plan and track their daily workouts, receive nutrition recommendations, and easily monitor their progress.', '2024-10-15', 'projects/T7DHiqs6xZLUACHEd3FkJELHT7ugXuOSvEQsnStz.png', 'projects/Bd25EjjrS1Jh7FxVJwnyEv9GkjyU0s3ynhLFPrJc.png', 'projects/rOsVNJL4sV0ySVC1eIksPjY7gC4NtM2kOFdBm95W.png', 'projects/oI7kcg8jsaQLiZ3DEGkqWJt7YBqWLvuTH8sw8ikK.jpg', 'FitLife helps users manage their workouts and dietary habits by providing daily workout guides tailored to their preferences and data from their fitness devices. The app also allows users to set fitness goals and track their progress with graphs and reports.', 'The main advantages of DesignKit include its capability for real-time collaboration, a user-friendly drag-and-drop interface, and integration with various other design software such as Figma and Adobe XD. Furthermore, its UI is designed to minimize the number of clicks and the time required to create prototypes.', '2024-10-15 00:30:27', '2024-10-15 00:30:27'),
(3, 'SmartHome', 'Best service', 3, 2, 'projects/VKo8mQAmNzsmv8Eey2XNCinQDcLVxB4w0n8RHfJZ.png', 'SmartHome is an IoT-based home automation system that allows users to control various household devices through a centralized app. With IoT technology, users can connect and manage lights, air conditioning, security cameras, and other devices remotely using their smartphones.', '2024-10-15', 'projects/juwyIVldiTq6RUYhSEXVu8vxcsVzuSyFgPNr4z6R.png', 'projects/7othiaKlNxZxGD0JnjgNl0G5FsZBMTttlu9O53zf.jpg', 'projects/97fZg8664yqnl71kKnzWnglxCO4x0nM4deeTnVFx.jpg', 'projects/AZOInsh2r82iI5Dn6YFYbJTKYqa98EAkDvHa8XJC.jpg', 'SmartHome enables users to automate their homes by wirelessly controlling various devices. The system integrates with smart sensors that can detect motion, temperature, and even air quality, providing a more efficient and secure living experience.\n\n\n\n', 'The main advantage of SmartHome lies in its wide compatibility with various IoT devices from different brands, as well as its ability to learn from user habits. The built-in AI system can provide automatic recommendations for device settings, such as adjusting temperature or lighting based on time and user preferences. Additionally, the app supports voice control with virtual assistants like Google Assistant and Amazon Alexa.', '2024-10-15 00:39:08', '2024-10-15 00:39:08'),
(4, 'Sipolin Polres Siak', 'Besttt service', 2, 3, 'projects/5R4WPm1qaJpjomUxeblSU1VXFwQ57Mcn2ldy09Xq.png', 'SmartHome is an IoT-based home automation system that allows users to control various household devices through a centralized app. With IoT technology, users can connect and manage lights, air conditioning, security cameras, and other devices remotely using their smartphones.', '2024-10-15', 'projects/T7DHiqs6xZLUACHEd3FkJELHT7ugXuOSvEQsnStz.png', 'projects/TxXDfrcV0yfiYkkqUKsNuOBJOZhR7ibB6hfwOlIR.png', 'projects/YN53zLxheiKqyRuZu9DD6Fa7hwQAbnO7h637jq0C.png', 'projects/lLT5HS52CVP3NEwuojXfKdgr6dGgRXaeC9s8sMBf.png', 'SmartHome enables users to automate their homes by wirelessly controlling various devices. The system integrates with smart sensors that can detect motion, temperature, and even air quality, providing a more efficient and secure living experience.\\n\\n\\n\\n', 'The main advantage of SmartHome lies in its wide compatibility with various IoT devices from different brands, as well as its ability to learn from user habits. The built-in AI system can provide automatic recommendations for device settings, such as adjusting temperature or lighting based on time and user preferences. Additionally, the app supports voice control with virtual assistants like Google Assistant and Amazon Alexa.', '2024-10-25 07:50:07', '2024-10-25 07:50:07'),
(5, 'DUMAI SIGAP', 'Besttt service', 3, 4, 'projects/VKo8mQAmNzsmv8Eey2XNCinQDcLVxB4w0n8RHfJZ.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit\nelit nascetur elementum neque euismod nisl arcu.\nUllamcorper tortor augue diam egestas. Nullam sit purus sit\nvitae mi. Vel, dolor nunc, in sit tellus. A viverra nunc, quam odio\ncondimentum natoque viverra. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Elit elit nascetur elementum neque\neuismod nislarcu.', '2024-10-15', 'projects/juwyIVldiTq6RUYhSEXVu8vxcsVzuSyFgPNr4z6R.png', 'projects/HgdWGd4lB2PiL0HZbKsfLbIO9ZTBkLf9dM1IaVx7.png', 'projects/8tI5ZFgafj4Oq21KleaX0Vn3BmrFJKVIHuVolxhw.png', 'projects/avfvURLOUkOB8wMxZIbE0bzS2Tspt3Gyc29jPkQP.png', 'SmartHome enables users to automate their homes by wirelessly controlling various devices. The system integrates with smart sensors that can detect motion, temperature, and even air quality, providing a more efficient and secure living experience.\\n\\n\\n\\n', 'The main advantage of SmartHome lies in its wide compatibility with various IoT devices from different brands, as well as its ability to learn from user habits. The built-in AI system can provide automatic recommendations for device settings, such as adjusting temperature or lighting based on time and user preferences. Additionally, the app supports voice control with virtual assistants like Google Assistant and Amazon Alexa.', '2024-10-25 07:52:02', '2024-10-25 07:52:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project_categories`
--

CREATE TABLE `project_categories` (
  `id_category` bigint(20) UNSIGNED NOT NULL,
  `name_category` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `project_categories`
--

INSERT INTO `project_categories` (`id_category`, `name_category`, `created_at`, `updated_at`) VALUES
(1, 'UI/UX Design', '2024-10-08 01:33:44', '2024-10-08 01:33:44'),
(2, 'Mobile Apps', '2024-10-08 01:34:29', '2024-10-08 01:34:29'),
(3, 'Internet of Things', '2024-10-08 01:36:00', '2024-10-08 01:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project_superiority`
--

CREATE TABLE `project_superiority` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `superiority_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `project_superiority`
--

INSERT INTO `project_superiority` (`id`, `project_id`, `superiority_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, NULL, NULL),
(2, 1, 3, NULL, NULL),
(3, 1, 4, NULL, NULL),
(5, 2, 2, NULL, NULL),
(6, 2, 3, NULL, NULL),
(7, 3, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `icon_service` varchar(255) DEFAULT NULL,
  `icon_service2` varchar(255) DEFAULT NULL,
  `images_service` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `name`, `description`, `icon_service`, `icon_service2`, `images_service`, `created_at`, `updated_at`) VALUES
(2, 'Website Development', 'We give web development solutions that will create an opportunity to generate more leads and achieve your business goals.', 'icons/uqwDKVYq25Nra5RnGvy54WYq53UNvWNb3ZWRfqPU.png', 'icons/dvOY2Qw1vW0ot5v11YgK1D5C5HfCm8LxSD73xw1P.png', 'images/WnrxSgdgrDKNS3gaEkaZQDxFLEm1I1FzdwooDHbY.png', '2024-10-23 23:46:21', '2024-10-23 23:46:21'),
(3, 'Mobile Apps Development', 'We combine vision, creativity, and empathy to build user-friendly mobile apps for IOS and Android, or Hybrid\ntechnology (Flutter or React Native).', 'icons/0BMKCulF8r9tIqgRBc9QRChzplgHghAtrBFvt99e.png', 'icons/ZdToWTxqdzi74uR57KAyMswZkScLn9oL6zGfIws9.png', 'images/RiNIqaQ4M6GHc4gOBKjwhLyJa3yozZmfwPG8uwOA.jpg', '2024-10-23 23:48:23', '2024-10-23 23:48:23'),
(4, 'UI/UX Design', 'We provide UI/UX Design service to change the appearance of your web or mobile apps.', 'icons/XILNwTsMSaJjgCJlyzdOjrFJiKbAdwtIJT1OwXiO.png', 'icons/fcF6Ft3WLTiJBpE6fAmGpUMrx6XUmZdNnTcNkOqG.png', 'images/N1l2QIHFe6lGAYZj4KzKmHwcM9gIDFZaMWFGqm4F.png', '2024-10-23 23:51:16', '2024-10-23 23:51:16'),
(5, 'Cyber Security', 'We can provide protection for your computer network.', 'icons/8qkqQxWOOPlI007l7ClFLcg07mn9PxkK9eFZDF2I.png', 'icons/RP5dDd1DVubxpT20ycQK9pgpGuG6mk8MWaKSYQ2Q.png', 'images/qIxThxcryLLlmXwSKrfGrDPo0TZUStLEbmHTITje.jpg', '2024-10-23 23:53:23', '2024-10-23 23:53:23'),
(6, 'Odoo', 'We can integrate all your data in one easy-to-use platform', 'icons/2SH2AVQLLC5YaPy8NXF1PIEBuzXuC3n8Mg6p8hAp.png', 'icons/ola366QlFqbtPkIgFYgb7wtoAWVtiXPJ8FtjT3JZ.png', 'images/ypxfnFbKPlYgPdsuvK8StEbQLvRGEiQXk6QS9zJQ.jpg', '2024-10-23 23:55:17', '2024-10-23 23:55:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description1` longtext NOT NULL,
  `description2` longtext NOT NULL,
  `year` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedln` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `settings`
--

INSERT INTO `settings` (`id`, `description1`, `description2`, `year`, `email`, `phone`, `facebook`, `instagram`, `linkedln`, `created_at`, `updated_at`) VALUES
(2, 'We bring distinctive-unique value to Indonesia’s ICT industry, with\ntangible business result and extensive technology experience via\nstrengthening core business and developing comprehensive e-solutions', 'Oemah Solution is an IT consulting services, web design, and mobile developer company\nfounded in April 2016 by experienced IT practitioners in their respective fields. We value each and every\ncollaboration formed with partners. As a result, we are fully committed to always delivering the best, most timely,\nand most effective results.', 2024, 'adminosi@gmail.com', '089514893565', 'https://www.facebook.com/OsiYogja?mibextid=ZbWKwL', 'https://www.instagram.com/oemahsolution.idn', 'https://www.linkedin.com/company/oemahsolution', '2024-10-08 00:31:13', '2024-10-08 00:31:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `superiorities`
--

CREATE TABLE `superiorities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo_superiority` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `superiorities`
--

INSERT INTO `superiorities` (`id`, `logo_superiority`, `name`, `description`, `created_at`, `updated_at`) VALUES
(2, 'logo_superiority/vrIdnUUJDQVKvC9zAyoye8A0Zw6sugx6oQrJsXwE.png', 'Simple', 'We collect required documents & send for check', '2024-10-15 23:57:35', '2024-10-15 23:57:35'),
(3, 'logo_superiority/f2S56fhryq7ThrmXfjJWkF1I2VfPFdQr6PLVcmvG.png', 'Systematic', 'We check the documents & send for final approval', '2024-10-15 23:58:52', '2024-10-15 23:58:52'),
(4, 'logo_superiority/dhLeR6yxFaMzdcnURpJ9OI7d215SExRE6LC9NfkJ.png', 'Approved', 'After approval, you\'re ready to use your accounts', '2024-10-15 23:59:39', '2024-10-15 23:59:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `team_members`
--

CREATE TABLE `team_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `team_members`
--

INSERT INTO `team_members` (`id`, `name`, `position`, `photo`, `created_at`, `updated_at`) VALUES
(3, 'Yani Aji Susilo', 'Prime Commissary', 'team_members/rUF5OPyGx1miuG93tPc8biLSfkcgND8cyvhliWta.jpg', '2024-10-14 00:50:13', '2024-10-14 00:50:13'),
(4, 'Dhonny Hendriyan', 'CEO', 'team_members/zy8CqWO6WNgOhjTGy4z4hjuC7kDiCEJPEubkTkAG.jpg', '2024-10-14 00:50:46', '2024-10-14 00:50:46'),
(5, 'Martin N. Mamanua', 'CTO', 'team_members/rUF5OPyGx1miuG93tPc8biLSfkcgND8cyvhliWta.jpg', '2024-10-14 00:50:46', '2024-10-14 00:50:46'),
(6, 'Firman Handiga', 'Marketing Manager', 'team_members/rUF5OPyGx1miuG93tPc8biLSfkcgND8cyvhliWta.jpg', '2024-10-14 00:50:46', '2024-10-14 00:50:46'),
(7, 'Iqbal Farhan R', 'CF', 'team_members/rUF5OPyGx1miuG93tPc8biLSfkcgND8cyvhliWta.jpg', '2024-10-14 00:50:46', '2024-10-14 00:50:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `technologies`
--

CREATE TABLE `technologies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_technology` varchar(255) NOT NULL,
  `technology_category_id` bigint(20) UNSIGNED NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `technologies`
--

INSERT INTO `technologies` (`id`, `name_technology`, `technology_category_id`, `logo`, `created_at`, `updated_at`) VALUES
(5, 'Flutter', 1, 'logos_technology/AE8fs3nKCAnYwkjng31P7mzslUEFA1yEb98TigK4.png', '2024-10-19 18:36:16', '2024-10-19 18:36:16'),
(6, 'Angular', 1, 'logos_technology/DUEuEhcQExMZlxjCb1L0odKtKtEsjkXa0sdQ9Xx4.png', '2024-10-19 18:36:35', '2024-10-19 18:36:35'),
(7, 'React Js', 1, 'logos_technology/AealmB70RGahVGcOPrMsvqadHg0xRrZafu6dHBCg.png', '2024-10-19 18:37:27', '2024-10-19 18:37:27'),
(8, 'Docker', 2, 'logos_technology/C57U02NdItPMQoUTIxbkpp9VPHzqQwrEf2rcSL90.png', '2024-10-19 19:19:20', '2024-10-19 19:19:20'),
(9, 'Kubernetes', 2, 'logos_technology/dniGRGgFr7YgzWWVYe1ti0QtpchVAaHM8l1ZX1mi.png', '2024-10-19 19:19:44', '2024-10-19 19:19:44'),
(10, 'Terraform', 2, 'logos_technology/zGmIUt6CSw7IsmjfxHN8oqkgLJVAktkRjTxVfPd0.png', '2024-10-19 19:20:11', '2024-10-19 19:20:11'),
(11, 'Trello', 3, 'logos_technology/MXpskQn8qHMKTWugaK2YXJO5N4wOGw8w0RiGtiuK.png', '2024-10-19 19:21:08', '2024-10-19 19:21:08'),
(12, 'Slack', 3, 'logos_technology/eLQZftY71Su45vKENFN7kNg9LjfhJrOuNz7xuR6u.png', '2024-10-19 19:21:43', '2024-10-19 19:21:43'),
(13, 'QuickBooks', 3, 'logos_technology/ULm0uUOzMeCb3e5XBGHNg1QbWfSwBET609WVzI1Z.png', '2024-10-19 19:22:18', '2024-10-19 19:22:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `technology_categories`
--

CREATE TABLE `technology_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_category` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `technology_categories`
--

INSERT INTO `technology_categories` (`id`, `name_category`, `created_at`, `updated_at`) VALUES
(1, 'Applications & Data', '2024-10-19 17:51:02', '2024-10-19 17:51:02'),
(2, 'Dev Ops', '2024-10-19 17:51:46', '2024-10-19 17:51:46'),
(3, 'Business & Utilities', '2024-10-19 17:52:03', '2024-10-19 17:52:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `vacancies`
--

CREATE TABLE `vacancies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `career_id` bigint(20) UNSIGNED NOT NULL,
  `CV` varchar(255) DEFAULT NULL,
  `Portofolio` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `vacancies`
--

INSERT INTO `vacancies` (`id`, `full_name`, `email`, `phone`, `age`, `career_id`, `CV`, `Portofolio`, `description`, `created_at`, `updated_at`) VALUES
(2, 'Farhan', 'iqfarryd@gmail.com', '081278458353', 20, 1, 'cv/Y9iVNfr9CIib3AmtpNkn4mq7OC3NoxkI7UxK7Nzk.pdf', 'portofolios/FAYPqIenZptegB9SqldfPqSDTQk78DVjabksHGyO.pdf', 'hallo', '2024-10-18 16:26:52', '2024-10-18 16:26:52'),
(3, 'Afkar', 'afkar@gmail.com', '098765432345', 20, 2, 'cv/ywewWX3cGsvRPXLeIKjCyrxJ6WetY0JEHPj55kbk.pdf', 'portofolios/JiuYaJpQ590CErxh5918XPLx1UCmVWrPhrtM5QuW.pdf', 'oke', '2024-10-18 16:37:36', '2024-10-18 16:37:36');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_username_unique` (`username`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indeks untuk tabel `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogs_keyword_blog_id_foreign` (`keyword_blog_id`);

--
-- Indeks untuk tabel `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `keyword_blogs`
--
ALTER TABLE `keyword_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `perusahaans`
--
ALTER TABLE `perusahaans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `projects_category_id_foreign` (`category_id`),
  ADD KEY `projects_perusahaan_id_foreign` (`perusahaan_id`);

--
-- Indeks untuk tabel `project_categories`
--
ALTER TABLE `project_categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indeks untuk tabel `project_superiority`
--
ALTER TABLE `project_superiority`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_superiority_project_id_foreign` (`project_id`),
  ADD KEY `project_superiority_superiority_id_foreign` (`superiority_id`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `superiorities`
--
ALTER TABLE `superiorities`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `technologies`
--
ALTER TABLE `technologies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `technologies_technology_category_id_foreign` (`technology_category_id`);

--
-- Indeks untuk tabel `technology_categories`
--
ALTER TABLE `technology_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vacancies_email_unique` (`email`),
  ADD KEY `vacancies_career_id_foreign` (`career_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `careers`
--
ALTER TABLE `careers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `keyword_blogs`
--
ALTER TABLE `keyword_blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `perusahaans`
--
ALTER TABLE `perusahaans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id_project` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `project_categories`
--
ALTER TABLE `project_categories`
  MODIFY `id_category` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `project_superiority`
--
ALTER TABLE `project_superiority`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT untuk tabel `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `superiorities`
--
ALTER TABLE `superiorities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `technologies`
--
ALTER TABLE `technologies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `technology_categories`
--
ALTER TABLE `technology_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_keyword_blog_id_foreign` FOREIGN KEY (`keyword_blog_id`) REFERENCES `keyword_blogs` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `project_categories` (`id_category`) ON DELETE CASCADE,
  ADD CONSTRAINT `projects_perusahaan_id_foreign` FOREIGN KEY (`perusahaan_id`) REFERENCES `perusahaans` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `project_superiority`
--
ALTER TABLE `project_superiority`
  ADD CONSTRAINT `project_superiority_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id_project`) ON DELETE CASCADE,
  ADD CONSTRAINT `project_superiority_superiority_id_foreign` FOREIGN KEY (`superiority_id`) REFERENCES `superiorities` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `technologies`
--
ALTER TABLE `technologies`
  ADD CONSTRAINT `technologies_technology_category_id_foreign` FOREIGN KEY (`technology_category_id`) REFERENCES `technology_categories` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `vacancies`
--
ALTER TABLE `vacancies`
  ADD CONSTRAINT `vacancies_career_id_foreign` FOREIGN KEY (`career_id`) REFERENCES `careers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
