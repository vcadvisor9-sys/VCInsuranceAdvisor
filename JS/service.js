// Hospital data and related functionality
const hospitals = {
    johor: [{
        name: "Asia Eye Specialist Centre (Bukit Indah)",
        address: "No. 73G & 75G, Jalan Bestari 12/2, Taman Nusa Bestari, 81300 Skudai, Johor",
        phone: "07-559 3075",
        city: "Skudai",
        coords: {
            lat: 1.5351,
            lng: 103.6831
        }
    }, {
        name: "Asia Eye Specialist Centre (Southern)",
        address: "No. 51 & 53, Jalan Dedap 23, Taman Johor Jaya, 81100 Johor Bahru, Johor",
        phone: "07-364 8299",
        city: "Johor Bahru",
        coords: {
            lat: 1.4927,
            lng: 103.7414
        }
    }, {
        name: "Columbia Asia Hospital - Iskandar Puteri",
        address: "Persiaran Afiat, Taman Kesihatan Afiat, 79250 Iskandar Puteri, Johor",
        phone: "07-233 9999",
        city: "Iskandar Puteri",
        coords: {
            lat: 1.4655,
            lng: 103.6057
        }
    }, {
        name: "Columbia Asia Hospital Tebrau",
        address: "Persiaran Southkey 5, Kota Southkey, 80150 Johor Bahru, Johor",
        phone: "07-272 9999",
        city: "Johor Bahru",
        coords: {
            lat: 1.4804,
            lng: 103.7767
        }
    }, {
        name: "Gleneagles Hospital Johor",
        address: "2 Jalan Medini Utara 4, Medini, 79250 Iskandar Puteri, Johor",
        phone: "07-560 1000",
        city: "Iskandar Puteri",
        coords: {
            lat: 1.4338,
            lng: 103.6318
        }
    }, {
        name: "KPJ Bandar Dato' Onn Specialist Hospital",
        address: "Jalan Bukit Mutiara, Bandar Dato' Onn, 81100 Johor Bahru, Johor",
        phone: "07- 301 1000",
        city: "Johor Bahru",
        coords: {
            lat: 1.4804,
            lng: 103.7767
        }
    }, {
        name: "KPJ Bandar Dato' Onn Specialist Hospital",
        address: "Jalan Bukit Mutiara, Bandar Dato' Onn, 81100 Johor Bahru, Johor",
        phone: "07-301 1000",
        city: "Johor Bahru",
        coords: {
            lat: 1.4927,
            lng: 103.7414
        }
    }, {
        name: "KPJ Bandar Maharani Specialist Hospital",
        address: "73-1, Jalan Stadium, 84000 Muar, Johor",
        phone: "06-956 4500",
        city: "Muar",
        coords: {
            lat: 2.0442,
            lng: 102.5689
        }
    }, {
        name: "KPJ Johor Specialist Hospital",
        address: "39B, Jalan Abdul Samad, 80100 Johor Bahru, Johor",
        phone: "07-225 3000",
        city: "Johor Bahru",
        coords: {
            lat: 1.4648,
            lng: 103.7618
        }
    }, {
        name: "KPJ Kluang Specialist Hospital",
        address: "PTD 91374, Jalan Saujana Utama, Taman Saujana Kluang 86000 Kluang, Johor",
        phone: "07-771 8999",
        city: "Kluang",
        coords: {
            lat: 2.0306,
            lng: 103.3167
        }
    }, {
        name: "KPJ Pasir Gudang Specialist Hospital",
        address: "Lot PTD 204781, Jalan Persiaran Dahlia, Taman Bukit Dahlia 81700 Pasir Gudang, Johor",
        phone: "07-257 3999",
        city: "Pasir Gudang",
        coords: {
            lat: 1.4737,
            lng: 103.8999
        }
    }, {
        name: "Pantai Hospital Batu Pahat",
        address: "95, Jalan Bintang 1, Taman Koperasi Bahagia, 83000 Batu Pahat, Johor",
        phone: "07-433 8811",
        city: "Batu Pahat",
        coords: {
            lat: 1.8554,
            lng: 102.9326
        }
    }, {
        name: "Regency Specialist Hospital",
        address: "No. 1 Jalan Suria, Bandar Seri Alam, 81750 Masai Johor",
        phone: "07-381 7700",
        city: "Pasir Gudang",
        coords: {
            lat: 1.4895,
            lng: 103.8720
        }
    }, {
        name: "Optimax Johor Eye Specialist Centre",
        address: "Ground Floor, No. 53 & 55, Jalan Cantik 6, Taman Pelangi Indah, 81800 Ulu Tiram, Johor Bahru, Johor",
        phone: "07-859 0528",
        city: "Johor Bahru",
        coords: {
            lat: 1.6130,
            lng: 103.8076
        }
    }, {
        name: "Optimax Eye Specialist Centre (Muar)",
        address: "Ground Floor, No. 1-5 & 1-6, Jalan Ismail, 84000 Muar, Johor",
        phone: "07-981 0018",
        city: "Muar",
        coords: {
            lat: 2.0442,
            lng: 102.5689
        }
    }, {
        name: "Optimax Kluang Eye Specialist Centre",
        address: "Ground Floor, No. 43 & 44, Jalan Haji Manan, 86000 Kluang, Johor",
        phone: "07-701 0018",
        city: "Kluang",
        coords: {
            lat: 2.0306,
            lng: 103.3167
        }
    }, {
        name: "Optimax Segamat Eye Specialist Centre",
        address: "Ground Floor, 49B & 49C, Jalan Genuang, 85000 Segamat, Johor",
        phone: "07-701 0018",
        city: "Segamat",
        coords: {
            lat: 2.5150,
            lng: 102.8154
        }
    }, {
        name: "Top Vision Eye Specialist Centre Batu Pahat",
        address: "No. 1 & 2, Jalan Maju, Taman Maju, 83000 Batu Pahat, Johor",
        phone: "07-439 4998",
        city: "Batu Pahat",
        coords: {
            lat: 1.8554,
            lng: 102.9326
        }
    }, {
        name: "Top Vision Eye Specialist Centre Kulai",
        address: "No. 56, Jalan Sri Putra 2, Bandar Putra, 81000 Kulai, Johor",
        phone: "016-929 9818",
        city: "Kulai",
        coords: {
            lat: 1.6587,
            lng: 103.6006
        }
    }, {
        name: "Top Vision Eye Specialist Centre Johor Bahru",
        address: "A-01-04 & A-01-05, Block A, 1 Tebrau, Jalan Tebrau, Kampung Setanggi, 80250 Johor Bahru, Johor",
        phone: "016-755 7298",
        city: "Johor Bahru",
        coords: {
            lat: 1.4648,
            lng: 103.7618
        }
    }, {
        name: "Kempas Medical Centre",
        address: "Lot PTD 7522, Jalan Kempas Baru, 81200 Johor Bahru, Johor",
        phone: "07-236 8999",
        city: "Johor Bahru",
        coords: {
            lat: 1.4648,
            lng: 103.7618
        }
    }, {
        name: "KPJ Batu Pahat Specialist Hospital",
        address: "No. 1 Jalan Mutiara Gading 1 Taman Mutiara Gading Sri Gading, 83000 Batu Pahat, Johor",
        phone: "07-459 1000",
        city: "Batu Pahat",
        coords: {
            lat: 1.8554,
            lng: 102.9326
        }
    }, {
        name: "KPJ Puteri Specialist Hospital",
        address: "33, Jalan Tun Abdul Razak (Susur 5), 80000 Johor Bahru, Johor",
        phone: "07-225 3222",
        city: "Johor Bahru",
        coords: {
            lat: 1.4648,
            lng: 103.7618
        }
    }, {
        name: "Putra Specialist Hospital (Batu Pahat)",
        address: "1, Jalan Peserai, 83000 Batu Pahat, Johor",
        phone: "07-413 3333",
        city: "Batu Pahat",
        coords: {
            lat: 1.8554,
            lng: 102.9326
        }
    }],
    kedah: [{
        name: "Asia Eye Specialist Centre (Sungai Petani)",
        address: "No. 276G & 277G, Jalan Lagenda 11, Lagenda Heights, 08000 Sungai Petani, Kedah",
        phone: "04-421 0011",
        city: "Sungai Petani",
        coords: {
            lat: 5.6470,
            lng: 100.4870
        }
    }, {
        name: "Metro Specialist Hospital",
        address: "No. 1, Lorong Metro, 08000 Sungai Petani, Kedah",
        phone: "04-423 8888",
        city: "Sungai Petani",
        coords: {
            lat: 5.6470,
            lng: 100.4870
        }
    }, {
        name: "Top Vision Eye Specialist Centre Sungai Petani",
        address: "No. 13, 14 & 15 Jalan Lagenda 2, Lagenda Height, 08000 Sungai Petani, Kedah",
        phone: "04-424 6888",
        city: "Sungai Petani",
        coords: {
            lat: 5.6470,
            lng: 100.4870
        }
    }, {
        name: "Aurelius Hospital Alor Setar",
        address: "69, Jalan Perusahaan 1, Taman Bandar Baru Mergong Alor Setar, Kedah",
        phone: "04-736 6970",
        city: "Alor Setar",
        coords: {
            lat: 6.1248,
            lng: 100.3678
        }
    }, {
        name: "Kedah Medical Centre",
        address: "527, Mukim Alor Merah Pumpong, Kampung Pumpong, 05250 Alor Setar, Kedah",
        phone: "04-730 8878",
        city: "Alor Setar",
        coords: {
            lat: 6.1248,
            lng: 100.3678
        }
    }, {
        name: "Pantai Hospital Sungai Petani",
        address: "1, Persiaran Cempaka, Bandar Aman Jaya, 08000 Sungai Petani, Kedah",
        phone: "04-442 8888",
        city: "Sungai Petani",
        coords: {
            lat: 5.6470,
            lng: 100.4870
        }
    }],
    kelantan: [{
        name: "KPJ Perdana Specialist Hospital",
        address: "Lot PT 37 & 600, Seksyen 14, Jalan Bayam, 15200 Kota Bahru, Kelantan",
        phone: "09-745 8000",
        city: "Kota Bharu",
        coords: {
            lat: 6.1247,
            lng: 102.2381
        }
    }, {
        name: "Hospital Universiti Sains Malaysia (USAINS)",
        address: "Usains Tech Services S/B, Kampus Kesihatan, 16150 Kubang Kerian, Kota Bharu, Kelantan",
        phone: "09-766 6200",
        city: "Kubang Kerian",
        coords: {
            lat: 6.0982,
            lng: 102.2896
        }
    }, {
        name: "Top Vision Eye Specialist Centre Kota Bharu",
        address: "No. 297, 298, 299 & 300, Jalan Sultan Ibrahim, Seksyen 16, 15050 Kota Bharu, Kelantan",
        phone: "09-741 8866",
        city: "Kota Bharu",
        coords: {
            lat: 6.1370,
            lng: 102.2380
        }
    }, {
        name: "Kota Bharu Medical Centre",
        address: "PT 179-184, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
        phone: "09-743 3399",
        city: "Kota Bharu",
        coords: {
            lat: 6.1333,
            lng: 102.2500
        }
    }],

    selangor: [{
            name: "An-Nur Specialist Hospital",
            address: "Jalan Gerbang Wawasan 1, Seksyen 15, 43650 Bandar Baru Bangi, Selangor",
            phone: "03-8923 5500",
            city: "Bandar Baru Bangi",
            coords: {
                lat: 2.9569,
                lng: 101.7518
            }
        }, {
            name: "Ara Damansara Medical Centre",
            address: "Lot 2, Jalan Lapangan Terbang Subang, Seksyen U2, 40150 Shah Alam, Selangor",
            phone: "03-5639 1212",
            city: "Shah Alam",
            coords: {
                lat: 3.1086,
                lng: 101.5651
            }
        }, {
            name: "Asia Eye Specialist Centre (USJ)",
            address: "No. 37, Jalan USJ 10/1F, Taipan Business Centre, 47620 Subang Jaya, Selangor",
            phone: "03-8011 8033",
            city: "Subang Jaya",
            coords: {
                lat: 3.0499,
                lng: 101.5845
            }
        }, {
            name: "Asia Eye Specialist Centre (Kelana Jaya)",
            address: "No. 103-G & 105-G, Jalan SS 25/2, Taman Mayang, 47301 Petaling Jaya, Selangor",
            phone: "03-7887 0033",
            city: "Petaling Jaya",
            coords: {
                lat: 3.1096,
                lng: 101.5971
            }
        }, {
            name: "Asia Eye Specialist Centre (Kepong)",
            address: "No. 60, Jalan Ambong 1, Kepong Baru, 52100 Kuala Lumpur",
            phone: "03-6241 8011",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.2105,
                lng: 101.6358
            }
        }, {
            name: "Asia Eye Specialist Centre (Serdang)",
            address: "67-G & 68-G, Pusat Perniagaan Olive Hill, Jalan BS 1/1, Taman Bukit Serdang, 43300 Seri Kembangan, Selangor",
            phone: "03-8940 0388",
            city: "Seri Kembangan",
            coords: {
                lat: 3.0243,
                lng: 101.7134
            }
        }, {
            name: "Beacon Hospital",
            address: "1 Jalan 215, Section 51, Off Jalan Templer, 46050 Petaling Jaya, Selangor",
            phone: "03-7620 7979",
            city: "Petaling Jaya",
            coords: {
                lat: 3.1188,
                lng: 101.6360
            }
        }, {
            name: "Bukit Tinggi Medical Centre",
            address: "Lot 83211, Persiaran Batu Nilam, Bandar Bukit Tinggi, 41200 Klang, Selangor",
            phone: "03-3884 3884",
            city: "Klang",
            coords: {
                lat: 3.0090,
                lng: 101.4472
            }
        }, {
            name: "Columbia Asia Hospital – Cheras",
            address: "Lot 33107, Jalan Suakasih, 43200 Cheras, Selangor",
            phone: "03-9086 9999",
            city: "Cheras",
            coords: {
                lat: 3.0627,
                lng: 101.7621
            }
        }, {
            name: "Damansara Specialist Hospital 2 (DSH 2)",
            address: "No. 1, Jalan Bukit Lanjan 3, Bukit Lanjan, 60000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            phone: "03-7717 3000",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1675,
                lng: 101.6079
            }
        }, {
            name: "Gleneagles Kuala Lumpur",
            address: "286, Jalan Ampang, 50450 Kuala Lumpur",
            phone: "03-4141 3000",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1611,
                lng: 101.7179
            }
        }, {
            name: "KL Eye Specialist Centre",
            address: "No 73 & 73-1, Jalan Metro Perdana Barat 1, Taman Usahawan Kepong, 52100 Kuala Lumpur",
            phone: "03-6250 0077",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.2089,
                lng: 101.6353
            }
        }, {
            name: "KPJ Damansara Specialist Hospital",
            address: "119, Jalan SS 20/10, Damansara Utama, 47400 Petaling Jaya, Selangor",
            phone: "03-7722 2692",
            city: "Petaling Jaya",
            coords: {
                lat: 3.1345,
                lng: 101.6171
            }
        }, {
            name: "KPJ Kajang Specialist Hospital",
            address: "Batu 14, Jalan Cheras, 43000 Kajang, Selangor",
            phone: "03-8769 2999",
            city: "Kajang",
            coords: {
                lat: 3.0187,
                lng: 101.7870
            }
        }, {
            name: "KPJ Klang Specialist Hospital",
            address: "No. 102, Persiaran Rajawali/KU1, Bandar Baru Klang, 41150 Klang, Selangor",
            phone: "03-3377 7888",
            city: "Klang",
            coords: {
                lat: 3.0442,
                lng: 101.4455
            }
        }, {
            name: "KPJ Rawang Specialist Hospital",
            address: "Jalan Rawang, Bandar Baru Rawang, 48000 Rawang Selangor",
            phone: "03-6099 8999",
            city: "Rawang",
            coords: {
                lat: 3.3213,
                lng: 101.5767
            }
        }, {
            name: "KPJ Tawakkal Specialist Hospital",
            address: "1, Jalan Pahang Barat, 53000 Kuala Lumpur",
            phone: "03-4026 7777",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.2006,
                lng: 101.7033
            }
        }, {
            name: "Optimax Bandar Sunway Eye Specialist Centre",
            address: "Ground Floor, No. 11, Jalan PJS 11/28B, Bandar Sunway, 46150 Petaling Jaya, Selangor",
            phone: "03-80841212",
            city: "Petaling Jaya",
            coords: {
                lat: 3.0716,
                lng: 101.6053
            }
        }, {
            name: "Optimax Klang Eye Specialist Centre",
            address: "No. 17 and 19, Jalan Bayu Tinggi 7, 41200 Klang, Selangor",
            phone: "03-33851186",
            city: "Klang",
            coords: {
                lat: 3.0413,
                lng: 101.4502
            }
        }, {
            name: "Optimax Shah Alam Eye Specialist Centre",
            address: "No. 50-G & 52-G, Blok 3, Jalan Pahat G 15/G, Dataran Otomobil, Seksyen 15, 40200 Shah Alam, Selangor",
            phone: "03-58701168",
            city: "Shah Alam",
            coords: {
                lat: 3.0738,
                lng: 101.5276
            }
        }, {
            name: "Optimax Eye Specialist Centre (Damansara Jaya)",
            address: "C38-40, Concourse Floor, Atria Shopping Gallery, Jalan SS22/23, Damansara Jaya, 47400 Petaling Jaya, Selangor",
            phone: "03-78900168",
            city: "Petaling Jaya",
            coords: {
                lat: 3.1332,
                lng: 101.6176
            }
        }, {
            name: "Optimax Eye Specialist Centre (TTDI)",
            address: "Unit 2-2-1, Bangunan AHP, Jalan Tun Mohd Fuad 3, Taman Tun Dr. Ismail, 6000 WP, Kuala Lumpur",
            phone: "03-78902626",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1390,
                lng: 101.6271
            }
        }, {
            name: "Optimax Kuala Lumpur Eye Specialist Centre",
            address: "Ground Floor, No. 145, Jalan Radin Bagus, Seri Petaling, 57000 Kuala Lumpur",
            phone: "03-27796499",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.0732,
                lng: 101.6931
            }
        }, {
            name: "Pantai Hospital Kuala Lumpur",
            address: "8, Jalan Bukit Pantai, 59100 Kuala Lumpur",
            phone: "03-2296 0888",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1198,
                lng: 101.6652
            }
        }, {
            name: "ParkCity Medical Centre",
            address: "2, Jalan Intisari Perdana, Desa Parkcity, 52200 Kuala Lumpur",
            phone: "03-5639 1212",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1966,
                lng: 101.6148
            }
        }, {
            name: "Sri Kota Specialist Medical Centre",
            address: "Jalan Mohet, 41000 Klang, Selangor",
            phone: "03-3375 7799",
            city: "Klang",
            coords: {
                lat: 3.0378,
                lng: 101.4519
            }
        }, {
            name: "Subang Jaya Medical Centre",
            address: "1, Jalan SS12/1A, 47500 Subang Jaya, Selangor",
            phone: "03-5639 1212",
            city: "Subang Jaya",
            coords: {
                lat: 3.0813,
                lng: 101.5845
            }
        }, {
            name: "Sunway Medical Centre",
            address: "5, Jalan Lagoon Selatan, Bandar Sunway, 46150 Petaling Jaya, Selangor",
            phone: "03-7491 9191",
            city: "Petaling Jaya",
            coords: {
                lat: 3.0716,
                lng: 101.6063
            }
        }, {
            name: "Sunway Medical Centre Velocity",
            address: "Pusat Perubatan Sunway Velocity, Lingkaran SV, Sunway Velocity, 55100, Kuala Lumpur",
            phone: "03-9772 9191",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1284,
                lng: 101.7353
            }
        }, {
            name: "Top Vision Eye Specialist Centre Setia Alam",
            address: "Unit 11-2 & 11-3, No. 2, Block 2, Jalan Setia Prima (S) U13/S, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
            phone: "03-33439911",
            city: "Shah Alam",
            coords: {
                lat: 3.1089,
                lng: 101.4706
            }
        }, {
            name: "Top Vision Eye Specialist Centre Banting",
            address: "1-G-A, Jalan Sultan Abdul Samad, 42700 Banting, Selangor",
            phone: "03-31818933",
            city: "Banting",
            coords: {
                lat: 2.8178,
                lng: 101.5032
            }
        }, {
            name: "Top Vision Eye Specialist Centre Kuala Selangor",
            address: "No. 53A & 55, Jalan Peninsula Utama 1, Peninsula Park, Pasir Penambang, 45000 Kuala Selangor, Selangor",
            phone: "03-32895500",
            city: "Kuala Selangor",
            coords: {
                lat: 3.3421,
                lng: 101.2487
            }
        }, {
            name: "UM Specialist Centre",
            address: "UMSC Building, Lot 28, Lorong Universiti, Lembah Pantai, 50603 Kuala Lumpur",
            phone: "03-7841 4000",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1187,
                lng: 101.6561
            }
        }, {
            name: "Assunta Hospital",
            address: "Jalan Templer, 46990 Petaling Jaya, Selangor",
            phone: "03-7680 7000",
            city: "Petaling Jaya",
            coords: {
                lat: 3.0913,
                lng: 101.6395
            }
        }, {
            name: "Avisena Specialist Hospital",
            address: "No. 4, Jalan Ikhtisas, Seksyen 14, 40000 Shah Alam, Selangor Darul Ehsan, Malaysia",
            phone: "03-5155 1966",
            city: "Shah Alam",
            coords: {
                lat: 3.0748,
                lng: 101.5256
            }
        }, {
            name: "Avisena Women's & Children's Specialist Hospital",
            address: "No. 3, Jalan Perdagangan 14/4, Seksyen 14, 40000 Shah Alam, Selangor Darul Ehsan, Malaysia",
            phone: "03-5155 1966",
            city: "Shah Alam",
            coords: {
                lat: 3.0759,
                lng: 101.5248
            }
        }, {
            name: "Cardiac Vascular Sentral Kuala Lumpur",
            address: "Jalan Stesen Sentral 5, Kuala Lumpur Sentral, 50470 Kuala Lumpur",
            phone: "03-2276 7000",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1353,
                lng: 101.6864
            }
        }, {
            name: "Columbia Asia Hospital - Bukit Jalil",
            address: "No. 9, Jalan Jalil Perkasa 7, Bukit Jalil, 57000, Kuala Lumpur",
            phone: "03-8657 9888",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.0553,
                lng: 101.6698
            }
        }, {
            name: "Columbia Asia Hospital - Bukit Rimau",
            address: "3, Persiaran Anggerik Eria, Bukit Rimau, Seksyen 32, 40460 Shah Alam, Selangor",
            phone: "03-5125 9999",
            city: "Shah Alam",
            coords: {
                lat: 3.0965,
                lng: 101.4904
            }
        }, {
            name: "Columbia Asia Hospital - Klang",
            address: "Jalan Mahkota 1/KU 2, Mutiara Bukit Raja 2, KM2 off Jalan Meru, 41050 Klang, Selangor Darul Ehsan",
            phone: "03-3346 7999",
            city: "Klang",
            coords: {
                lat: 3.0649,
                lng: 101.4670
            }
        }, {
            name: "Columbia Asia Hospital - Puchong",
            address: "1 Lebuh Puteri, Bandar Puteri Puchong, 47100 Puchong, Selango",
            phone: "03-8064 8688",
            city: "Puchong",
            coords: {
                lat: 2.9933,
                lng: 101.6168
            }
        }, {
            name: "Columbia Asia Hospital - Setapak",
            address: "No. 1, Jalan Danau Saujana, Off Jalan Genting Klang, 53300 Kuala Lumpur",
            phone: "03-4145 9999",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1988,
                lng: 101.7126
            }
        }, {
            name: "Columbia Asia Hospital - Petaling Jaya",
            address: "69, Jalan 13/6, Seksyen 13, 46200 Petaling Jaya, Selangor",
            phone: "03-7949 9999",
            city: "Petaling Jaya",
            coords: {
                lat: 3.0996,
                lng: 101.6408
            }
        }, {
            name: "Institut Jantung Negara",
            address: "145, Jalan Tun Razak, 50400 Kuala Lumpur",
            phone: "03-2617 8200",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1665,
                lng: 101.7149
            }
        }, {
            name: "KPJ Ampang Puteri Specialist Hospital",
            address: "1, Jalan Mamanda 9, Taman Dato Ahmad Razali, 68000 Ampang, Selangor",
            phone: "03-4270 2500",
            city: "Ampang",
            coords: {
                lat: 3.1476,
                lng: 101.7618
            }
        }, {
            name: "KPJ Kuala Selangor Specialist Hospital",
            address: "No. 1, Jalan Peninsula Tanjung, Peninsula Utama, 45000, Kuala Selangor, Selangor",
            phone: "03-6078 5888",
            city: "Kuala Selangor",
            coords: {
                lat: 3.3408,
                lng: 101.2499
            }
        }, {
            name: "KPJ Selangor Specialist Hospital",
            address: "Lot 1, Jalan Singa 20/1, Section 20, 40300 Shah Alam, Selangor",
            phone: "03-5543 1111",
            city: "Shah Alam",
            coords: {
                lat: 3.0583,
                lng: 101.5251
            }
        }, {
            name: "Pantai Hospital Ampang",
            address: "Jalan Perubatan 1, Pandan Indah, 55100 Kuala Lumpur",
            phone: "03-4289 2828",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1345,
                lng: 101.7521
            }
        }, {
            name: "Pantai Hospital Cheras",
            address: "1, Jalan 1/96A, Taman Cheras Makmur, 56100 Kuala Lumpur",
            phone: "03-9145 2888",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1044,
                lng: 101.7433
            }
        }, {
            name: "Pantai Hospital Klang",
            address: "Lot 5921, Persiaran Raja Muda Musa, 41200 Klang, Selangor",
            phone: "03-3258 5500",
            city: "Klang",
            coords: {
                lat: 3.0379,
                lng: 101.4504
            }
        }, {
            name: "KPJ Sentosa KL Specialist Medical Centre",
            address: "36, Jalan Chemur, Kompleks Damai, 50400 Kuala Lumpur",
            phone: "03-4043 7166",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1701,
                lng: 101.6991
            }
        }, {
            name: "Sentosa Specialist Hospital",
            address: "No 27-29, Lorong Temenggung 15A, Dan No. 2, 4 & 6, Lorong Temenggung 15D, Off Jalan Sungai Jati, 41200 Klang, Selangor",
            phone: "03-5162 8819",
            city: "Klang",
            coords: {
                lat: 3.0404,
                lng: 101.4463
            }
        }, {
            name: "Sungai Long Specialist Hospital",
            address: "Pt 21147, Persiaran SL 1, Bandar Sg Long, 43000 Kajang, Selangor",
            phone: "03-9010 3788",
            city: "Kajang",
            coords: {
                lat: 3.0456,
                lng: 101.8023
            }
        }, {
            name: "Thomson Hospital Kota Damansara",
            address: "11 Jalan Technologi, Taman Sains Selangor 1, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
            phone: "03-6287 1111",
            city: "Petaling Jaya",
            coords: {
                lat: 3.1639,
                lng: 101.5897
            }
        }, {
            name: "Tung Shin Hospital",
            address: "102, Jalan Pudu, 55100 Kuala Lumpur",
            phone: "03-2037 2288",
            city: "Kuala Lumpur",
            coords: {
                lat: 3.1444,
                lng: 101.7042
            }
        }

    ],
    malacca: [{
        name: "Mahkota Medical Centre",
        address: "3, Mahkota Melaka, Jalan Merdeka, 75000 Melaka",
        phone: "06-281 3333",
        "city": "Melaka",
        coords: {
            lat: 2.1940,
            lng: 102.2490
        }
    }, {
        name: "Putra Specialist Hospital (Melaka)",
        address: "169, Jalan Bendahara, 75100 Melaka",
        phone: "06-283 5888",
        city: "Melaka",
        coords: {
            lat: 2.1994,
            lng: 102.2463
        }
    }, {
        name: "Southern Specialist Eye Centre",
        address: "No. 309 & 310, Jalan Melaka Raya 1, Taman Melaka Raya, 75000 Melaka",
        phone: "06-2833510",
        city: "Melaka",
        coords: {
            lat: 2.1899,
            lng: 102.2515
        }
    }, {
        name: "Oriental Melaka Straits Medical Centre",
        address: "Pusat Perubatan Klebang, 75200 Melaka",
        phone: "06-315 8888",
        city: "Melaka",
        coords: {
            lat: 2.2191,
            lng: 102.1952
        }
    }, {
        name: "Pantai Hospital Melaka",
        address: "2418-1, KM 8, Lebuh Ayer Keroh, 75450 Melaka",
        phone: "06-231 9999",
        city: "Melaka",
        coords: {
            lat: 2.2640,
            lng: 102.2839
        }
    }],
    NegeriSembilan: [{
        "name": "Columbia Asia Hospital - Seremban",
        "address": "292, Jalan Haruan 2, Oakland Commercial Centre, 70300 Seremban, Negeri Sembilan",
        "phone": "06-603 3988",
        "city": "Seremban",
        "coords": {
            "lat": 2.7142,
            "lng": 101.9264
        }
    }, {
        "name": "KPJ Seremban Specialist Hospital",
        "address": "Lot 6219 & 6220, Jalan Toman 1, Kemayan Square, 70200 Seremban, Negeri Sembilan",
        "phone": "06-767 7800",
        "city": "Seremban",
        "coords": {
            "lat": 2.7238,
            "lng": 101.9380
        }
    }, {
        "name": "Optimax Seremban Eye Specialist Centre",
        "address": "No. 141 and 142, Jalan Tun Dr. Ismail, 70200 Seremban, Negeri Sembilan",
        "phone": "06-6020018",
        "city": "Seremban",
        "coords": {
            "lat": 2.7303,
            "lng": 101.9378
        }
    }, {
        "name": "Optimax Bahau Eye Specialist Centre",
        "address": "No. 13 & 15 (Ground Floor), Jalan Seraya 1, Pusat Perniagaan Seraya, Bandar IOI, 72100 Bahau, Negeri Sembilan",
        "phone": "06-6180012",
        "city": "Bahau",
        "coords": {
            "lat": 2.8157,
            "lng": 102.4078
        }
    }, {
        "name": "Top Vision Eye Specialist Centre Seremban",
        "address": "No. 6-8, Jalan Rasah Prima 1, Pusat Komersial Rasah Prima, 70300 Seremban, Negeri Sembilan",
        "phone": "06-6337791",
        "city": "Seremban",
        "coords": {
            "lat": 2.7053,
            "lng": 101.9241
        }
    }, {
        "name": "Aurelius Hospital Nilai",
        "address": "PT 13717, Jalan BBN 2/1, 71800 Nilai, Negeri Sembilan",
        "phone": "06-850 0999",
        "city": "Nilai",
        "coords": {
            "lat": 2.8178,
            "lng": 101.7975
        }
    }, {
        "name": "Mawar Medical Centre",
        "address": "71, Jalan Rasah, Bukit Rasah, 70300 Seremban, Negeri Sembilan",
        "phone": "06-7647048",
        "city": "Seremban",
        "coords": {
            "lat": 2.7285,
            "lng": 101.9358
        }
    }, {
        "name": "Senawang Specialist Hospital",
        "address": "234-243 Jalan Lavendar Heights 2, Lavender Business Square, 70450 Senawang, Negeri Sembilan",
        "phone": "06-677 1858",
        "city": "Senawang",
        "coords": {
            "lat": 2.6935,
            "lng": 101.9791
        }
    }],
    pahang: [{
        "name": "Asia Eye Specialist Centre (Kuantan)",
        "address": "No. A-7 & A-9, Lorong Seri Kuantan 2, Jalan Beserah, Taman Teluk Sisik, 25000, Kuantan, Pahang",
        "phone": "09-513 3860",
        "city": "Kuantan",
        "coords": {
            "lat": 3.8195,
            "lng": 103.3381
        }
    }, {
        "name": "KPJ Pahang Specialist Hospital",
        "address": "Lot 105703 (PT 83065), Tanjung Lumpur, 26060 Kuantan, Pahang",
        "phone": "09-511 2692",
        "city": "Kuantan",
        "coords": {
            "lat": 3.8171,
            "lng": 103.3294
        }
    }, {
        "name": "Top Vision Eye Specialist Centre Mentakab",
        "address": "No. 7, 9, & 11, Jalan Bukit keramat Utama, Taman Bukit Keramat, 28400 Mentakab, Pahang",
        "phone": "09-2781133",
        "city": "Mentakab",
        "coords": {
            "lat": 3.4854,
            "lng": 102.3483
        }
    }, {
        "name": "KMI Kuantan Medical Centre",
        "address": "1, Jalan Tun Ismail 9, 25000 Kuantan, Pahang",
        "phone": "09-590 2828",
        "city": "Kuantan",
        "coords": {
            "lat": 3.8143,
            "lng": 103.3348
        }
    }],
    perak: [{
        "name": "Asia Eye Specialist Centre (Setiawan)",
        "address": "No 3A, 5G, 6G Jalan Sitiawan Jaya, 32000 Sitiawan, Perak",
        "phone": "05-693 2666",
        "city": "Sitiawan",
        "coords": {
            "lat": 4.2167,
            "lng": 100.7000
        }
    }, {
        "name": "Columbia Asia Hospital - Taiping",
        "address": "5, Jalan Perwira, 34000 Taiping, Perak",
        "phone": "05-820 8888",
        "city": "Taiping",
        "coords": {
            "lat": 4.8550,
            "lng": 100.7370
        }
    }, {
        "name": "Hospital Fatimah",
        "address": "1, Lebuh Chew Peng Loon, Off Jalan Dato' Lau Pak Khuan, Ipoh Garden, 31400 Ipoh, Perak",
        "phone": "05-545 5777",
        "city": "Ipoh",
        "coords": {
            "lat": 4.5975,
            "lng": 101.0900
        }
    }, {
        "name": "KPJ Ipoh Specialist Hospital",
        "address": "26, Jalan Raja Dihilir, 30350 Ipoh, Perak",
        "phone": "05-241 8777",
        "city": "Ipoh",
        "coords": {
            "lat": 4.5992,
            "lng": 101.0776
        }
    }, {
        "name": "KPJ Sri Manjung Specialist Hospital",
        "address": "Lot 14777 & 14778, Jalan Lumut, 32000, Sitiawan Perak",
        "phone": "05-691 8153",
        "city": "Sitiawan",
        "coords": {
            "lat": 4.2100,
            "lng": 100.6900
        }
    }, {
        "name": "Optimax Ipoh Eye Specialist Centre",
        "address": "Ground Floor, No. 1, Jalan Dato' Khong Kam Tak, Off Jalan Tambun, 31400 Ipoh, Perak",
        "phone": "05-2380028",
        "city": "Ipoh",
        "coords": {
            "lat": 4.6220,
            "lng": 101.1250
        }
    }, {
        "name": "Perak Community Specialist",
        "address": "No. 277, Jalan Raja Permaisuri Bainun, 30250 Ipoh, Perak",
        "phone": "05-241 9000",
        "city": "Ipoh",
        "coords": {
            "lat": 4.5978,
            "lng": 101.0769
        }
    }, {
        "name": "Top Vision Eye Specialist Centre Taiping",
        "address": "158, 160 & 162, Jalan Taming Sari, 34000 Taiping, Perak",
        "phone": "05-8830363",
        "city": "Taiping",
        "coords": {
            "lat": 4.8530,
            "lng": 100.7380
        }
    }, {
        "name": "Anson Bay Medical Centre",
        "address": "Lot 992, Batu 3 ½ , Jalan Maharajela, 36000, Teluk Intan, Perak",
        "phone": "05-623 2999",
        "city": "Teluk Intan",
        "coords": {
            "lat": 4.0220,
            "lng": 101.0170
        }
    }, {
        "name": "Pantai Hospital Ipoh",
        "address": "126, Jalan Tambun, 31400 Ipoh, Perak",
        "phone": "05-548 4333",
        "city": "Ipoh",
        "coords": {
            "lat": 4.6225,
            "lng": 101.1258
        }
    }, {
        "name": "Pantai Hospital Manjung",
        "address": "Jalan PPMP1, Pusat Perniagaan Manjung Point, 32040 Seri Manjung, Perak",
        "phone": "05-689 8555",
        "city": "Seri Manjung",
        "coords": {
            "lat": 4.2100,
            "lng": 100.6900
        }
    }, {
        "name": "Sunway Medical Centre Ipoh",
        "address": "No. 2, Persiaran Sunway, Sunway City Ipoh, Perak",
        "phone": "05-871 1919",
        "city": "Ipoh",
        "coords": {
            "lat": 4.5600,
            "lng": 101.0900
        }
    }, {
        "name": "Taiping Medical Centre",
        "address": "45-49 Jalan Medan Taiping 2, Medan Taiping, 34000 Taiping, Perak",
        "phone": "05-807 1049",
        "city": "Taiping",
        "coords": {
            "lat": 4.8550,
            "lng": 100.7370
        }
    }],
    perlis: [{
        "name": "KPJ Perlis Specialist Hospital",
        "address": "No.77, Jalan Dato’ Wan Ahmad, 01000 Kangar, Perlis",
        "phone": "04-970 7777",
        "city": "Kangar",
        "coords": {
            "lat": 6.4414,
            "lng": 100.1986
        }
    }],
    penang: [{
        "name": "Asia Eye Specialist Centre (Bukit Mertajam)",
        "address": "1244, 1245 & 1246, Jalan Padang Lallang, Taman Desa Damai, 14000, Bukit Mertajam, Pulau Pinang.",
        "phone": "04-5399 360",
        "city": "Bukit Mertajam",
        "coords": {
            "lat": 5.3630,
            "lng": 100.4667
        }
    }, {
        "name": "Gleneagles Hospital Penang",
        "address": "1, Jalan Pangkor, 10050 Pulau Pinang",
        "phone": "04-222 9111",
        "city": "George Town",
        "coords": {
            "lat": 5.4244,
            "lng": 100.3108
        }
    }, {
        "name": "Hospital Lam Wah Ee",
        "address": "141, Jalan Tan Sri Teh Ewe Lim, 11600 Pulau Pinang",
        "phone": "04-657 1888",
        "city": "George Town",
        "coords": {
            "lat": 5.3983,
            "lng": 100.3079
        }
    }, {
        "name": "Island Hospital",
        "address": "308, Macalister Road, 10450 Pulau Pinang.",
        "phone": "04-228 8222",
        "city": "George Town",
        "coords": {
            "lat": 5.4169,
            "lng": 100.3217
        }
    }, {
        "name": "Optimax Eye Specialist Centre (Penang)",
        "address": "Ground Floor, No. 223, Jalan Masjid Negeri, 11600 Georgetown, Pulau Pinang",
        "phone": "04-2020232",
        "city": "George Town",
        "coords": {
            "lat": 5.4111,
            "lng": 100.3164
        }
    }, {
        "name": "Sunway Medical Centre Penang",
        "address": "Lebuh Tenggiri 2, 13700 Seberang Jaya, Pulau Pinang",
        "phone": "04-373 9191",
        "city": "Seberang Jaya",
        "coords": {
            "lat": 5.3976,
            "lng": 100.4088
        }
    }, {
        "name": "Bagan Specialist Centre",
        "address": "Jalan Bagan 1, 13400 Butterworth, Pulau Pinang",
        "phone": "04-371 0000",
        "city": "Butterworth",
        "coords": {
            "lat": 5.4142,
            "lng": 100.3748
        }
    }, {
        "name": "Loh Guan Lye Specialist Centre",
        "address": "238, Macalister Road, 10400 Pulau Pinang",
        "phone": "04-238 8888",
        "city": "George Town",
        "coords": {
            "lat": 5.4163,
            "lng": 100.3225
        }
    }, {
        "name": "KPJ Penang Specialist Hospital",
        "address": "570 Jalan Perda Utama, Bandar Perda, Seberang Jaya, Pulau Pinang",
        "phone": "04-548 6688",
        "city": "Seberang Jaya",
        "coords": {
            "lat": 5.3974,
            "lng": 100.4333
        }
    }, {
        "name": "Mount Miriam Cancer Hospital",
        "address": "23, Jalan Bulan, Fettes Park, 11200 Tanjung Bungah, Pulau Pinang",
        "phone": "04-892 3999",
        "city": "Tanjung Bungah",
        "coords": {
            "lat": 5.4590,
            "lng": 100.2926
        }
    }, {
        "name": "Pantai Hospital Penang",
        "address": "82, Jalan Tengah, Bayan Baru, 11900 Bayan Lepas, Pulau Pinang",
        "phone": "04-643 3888",
        "city": "Bayan Lepas",
        "coords": {
            "lat": 5.3378,
            "lng": 100.3021
        }
    }, {
        "name": "Penang Adventist Hospital",
        "address": "465, Jalan Burmah, 10350 Pulau Pinang",
        "phone": "04-222 7200",
        "city": "George Town",
        "coords": {
            "lat": 5.4289,
            "lng": 100.3102
        }
    }],
    sabah: [{
        "name": "Gleneagles Kota Kinabalu Hospital",
        "address": "Riverson @ Sembulan, Block A-1, Lorong Riverson @ Sembulan, Borneo, Jalan Coastal, 88100 Kota Kinabalu, Sabah",
        "phone": "088-518 888",
        "city": "Kota Kinabalu",
        "coords": {
            "lat": 5.9804,
            "lng": 116.0735
        }
    }, {
        "name": "Optimax Kota Kinabalu Eye Specialist Centre",
        "address": "Ground Floor, Sky Arena, Mile 3 1/2, Jalan Penampang, Penampang, 88300 Kota Kinabalu, Sabah",
        "phone": "088-335025",
        "city": "Kota Kinabalu",
        "coords": {
            "lat": 5.9254,
            "lng": 116.0982
        }
    }, {
        "name": "Jesselton Medical Centre",
        "address": "Jalan Metro 2, Metro Town, Off Jalan Lintas, 88300 Kota Kinabalu, Sabah",
        "phone": "088-366 333",
        "city": "Kota Kinabalu",
        "coords": {
            "lat": 5.9667,
            "lng": 116.0833
        }
    }, {
        "name": "KPJ Sabah Specialist Centre",
        "address": "Lot No.2, Lorong Bersatu, off Jalan Damai Luyang, 88300 Kota Kinabalu, Sabah",
        "phone": "088-211 333",
        "city": "Kota Kinabalu",
        "coords": {
            "lat": 5.9675,
            "lng": 116.0778
        }
    }],
    sarawak: [{
        "name": "Asia Eye Specialist Centre (Sarawak)",
        "address": "Ground Floor Sublot 17, Stallion Building, 1 1/2 Mile, Jalan Rock, Rock Commercial Centre, 93200 Kuching, Sarawak",
        "phone": "08-250 7272",
        "city": "Kuching",
        "coords": {
            "lat": 1.5495,
            "lng": 110.3592
        }
    }, {
        "name": "Bintulu Medical Centre",
        "address": "Lot 6009, Block 31, Kemena Land Disctrict, 97000 Bintulu, Sarawak",
        "phone": "086-330 333",
        "city": "Bintulu",
        "coords": {
            "lat": 3.1713,
            "lng": 113.0419
        }
    }, {
        "name": "Borneo Medical Centre Kuching",
        "address": "Lot 10992, Section 64, KTLD, Jalan Tun Jugah, 93350 Kuching, Sarawak",
        "phone": "082-507 333",
        "city": "Kuching",
        "coords": {
            "lat": 1.5313,
            "lng": 110.3562
        }
    }, {
        "name": "Borneo Medical Centre Miri",
        "address": "Lot 1959, Block 10, MCLD, Jalan Cahaya, off Jalan Miri-Bintulu, 98000 Miri, Sarawak",
        "phone": "085-329333",
        "city": "Miri",
        "coords": {
            "lat": 4.4145,
            "lng": 114.0088
        }
    }, {
        "name": "Kemena Pacific Hospital",
        "address": "Lot 3582 Block 26, Jalan Tan Sri Ikhwan, Kemena Land District, Tanjung Kidurong, 97000 Bintulu, Sarawak",
        "phone": "086–251 888",
        "city": "Bintulu",
        "coords": {
            "lat": 3.1988,
            "lng": 113.0764
        }
    }, {
        "name": "Selesa Pacific Hospital",
        "address": "Lot 1035-1039, Jalan Bulan Sabit, CDT 155, 98009 Miri, Sarawak",
        "phone": "085-437 755",
        "city": "Miri",
        "coords": {
            "lat": 4.4145,
            "lng": 114.0088
        }
    }, {
        "name": "KPJ Miri Specialist Hospital",
        "address": "Lot 8836, Block, 11, Kuala Baram By Pass Rd, Bandar Baru Permyjaya, 98000 Miri, Sarawak",
        "phone": "085-649 999",
        "city": "Miri",
        "coords": {
            "lat": 4.4145,
            "lng": 114.0088
        }
    }, {
        "name": "Optimax Kuching Eye Specialist Centre",
        "address": "Ground Floor, No. 59 & 61, Jalan Tun Jugah, 93250 Kuching, Sarawak",
        "phone": "088-335025",
        "city": "Kuching",
        "coords": {
            "lat": 1.5313,
            "lng": 110.3562
        }
    }, {
        "name": "Rejang Medical Centre",
        "address": "29, Jalan Pedada, 96008 Sibu, Sarawak",
        "phone": "084-330 733",
        "city": "Sibu",
        "coords": {
            "lat": 2.2870,
            "lng": 111.8302
        }
    }, {
        "name": "Timberland Medical Centre",
        "address": "Lot 5164-5165, Blk 16, KCLD, Taman Timberland, Rock Road, 93250 Kuching, Sarawak",
        "phone": "082-234 466",
        "city": "Kuching",
        "coords": {
            "lat": 1.5495,
            "lng": 110.3592
        }
    }, {
        "name": "KPJ Kuching Specialist Hospital",
        "address": "Lot 10420, Blk 11, Tabuan Stutong Ctr, Jalan Setia Raja, 93350 Kuching, Sarawak",
        "phone": "082-365 777",
        "city": "Kuching",
        "coords": {
            "lat": 1.5313,
            "lng": 110.3562
        }
    }, {
        "name": "Miri City Medical Centre",
        "address": "Lot 916-920, 1202 & 1203, Jalan Hokkien, 98000 Miri, Sarawak",
        "phone": "085-426 622",
        "city": "Miri",
        "coords": {
            "lat": 4.4145,
            "lng": 114.0088
        }
    }, {
        "name": "Sibu Specialist Medical Centre",
        "address": "52A-F, Brooke Drive, 96000 Sibu, Sarawak",
        "phone": "084-329 900",
        "city": "Sibu",
        "coords": {
            "lat": 2.2870,
            "lng": 111.8302
        }
    }],
    terengganu: [{
        "name": "KMI Kuala Terengganu Medical Centre",
        "address": "443B, Jalan Kamarudin, 20400 Kuala Terengganu, Terengganu",
        "phone": "09-637 8888",
        "city": "Kuala Terengganu",
        "coords": {
            "lat": 5.3296,
            "lng": 103.1370
        }
    }, {
        "name": "Salam Kuala Terengganu Specialist Hospital",
        "address": "Lot 4075, Jalan Engku Sar, 20200 Kuala Terengganu, Terengganu",
        "phone": "09-6200 200",
        "city": "Kuala Terengganu",
        "coords": {
            "lat": 5.3247,
            "lng": 103.1340
        }
    }]
};

const cities = {
    johor: ["Johor Bahru", "Skudai", "Iskandar Puteri", "Muar", "Segamat", "Kluang", "Batu Pahat", "Kulai", "Pasir Gudang"],
    kedah: ["Sungai Petani", "Alor Setar"],
    kelantan: ["Kota Bharu", "Kubang Kerian", "Machang", "Pasir Mas", "Tanah Merah", "Bachok", "Pasir Puteh", "Kuala Krai", "Gua Musang", "Jeli"],
    selangor: ["Ampang", "Banting", "Bandar Baru Bangi", "Cheras", "Kajang", "Klang", "Kuala Lumpur", "Kuala Selangor", "Petaling Jaya", "Puchong", "Rawang", "Seri Kembangan", "Shah Alam", "Subang Jaya"]
};

let selectedHospital = null;

const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');
const citySelector = document.getElementById('citySelector');
const hospitalsList = document.getElementById('hospitalsList');
const mapContainer = document.getElementById('mapContainer');
const mapControls = document.getElementById('mapControls');
const hospitalInfo = document.getElementById('hospitalInfo');
const googleMapsBtn = document.getElementById('googleMapsBtn');
const copyAddressBtn = document.getElementById('copyAddressBtn');

if (stateSelect) {
    stateSelect.addEventListener('change', function() {
        const selectedState = this.value;
        if (selectedState && hospitals[selectedState]) {
            showCitySelector(selectedState);
            displayHospitals(hospitals[selectedState]);
        } else {
            hideCitySelector();
            hospitalsList.innerHTML = '<div class="no-selection"><p>请先选择州属以查看该地区的医院</p></div>';
            hideMap();
        }
    });
}

if (citySelect) {
    citySelect.addEventListener('change', function() {
        const selectedState = stateSelect.value;
        const selectedCity = this.value;

        if (selectedState && hospitals[selectedState]) {
            let hospitalsToShow = hospitals[selectedState];

            if (selectedCity) {
                hospitalsToShow = hospitals[selectedState].filter(hospital =>
                    hospital.city === selectedCity
                );
            }

            displayHospitals(hospitalsToShow);

            if (hospitalsToShow.length === 0) {
                hospitalsList.innerHTML = '<div class="no-selection"><p>所选城市暂无合作医院</p></div>';
            }
        }
    });
}

function showCitySelector(state) {
    if (cities[state]) {
        citySelect.innerHTML = '<option value="">所有城市</option>';
        cities[state].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        citySelector.style.display = 'block';
    } else {
        hideCitySelector();
    }
}

function hideCitySelector() {
    citySelector.style.display = 'none';
    citySelect.value = '';
}

function displayHospitals(stateHospitals) {
    hospitalsList.innerHTML = '';
    stateHospitals.forEach((hospital, index) => {
        const hospitalItem = document.createElement('div');
        hospitalItem.className = 'hospital-item';
        hospitalItem.innerHTML = `
            <div class="hospital-name">${hospital.name}</div>
            <div class="hospital-address">${hospital.address}</div>
        `;
        hospitalItem.addEventListener('click', () => selectHospital(hospital, hospitalItem));
        hospitalsList.appendChild(hospitalItem);
    });
}

function selectHospital(hospital, element) {
    document.querySelectorAll('.hospital-item').forEach(item => {
        item.classList.remove('active');
    });

    element.classList.add('active');
    selectedHospital = hospital;
    showHospitalOnMap(hospital);
    showHospitalInfo(hospital);
}

function showHospitalOnMap(hospital) {
    mapContainer.innerHTML = `
        <iframe 
            class="map-frame"
            src="https://maps.google.com/maps?q=${encodeURIComponent(hospital.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;
    mapControls.style.display = 'block';
}

function showHospitalInfo(hospital) {
    hospitalInfo.innerHTML = `
        <h4>${hospital.name}</h4>
        <p><strong>📍 地址:</strong> ${hospital.address}</p>
        <p><strong>📞 电话:</strong> ${hospital.phone}</p>
        <p><strong>🏙️ 城市:</strong> ${hospital.city}</p>
    `;

    googleMapsBtn.href = `https://maps.google.com/maps?q=${encodeURIComponent(hospital.address)}`;
}

function hideMap() {
    mapContainer.innerHTML = '<div class="map-placeholder"><p>🏥 选择医院以查看位置</p></div>';
    mapControls.style.display = 'none';
    selectedHospital = null;
}

if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', async function() {
        if (selectedHospital) {
            try {
                await navigator.clipboard.writeText(selectedHospital.address);
                const originalText = this.innerHTML;
                this.innerHTML = '✅ 已复制!';
                this.style.background = '#27ae60';

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            } catch (err) {
                const textArea = document.createElement('textarea');
                textArea.value = selectedHospital.address;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);

                const originalText = this.innerHTML;
                this.innerHTML = '✅ 已复制!';
                this.style.background = '#27ae60';

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            }
        }
    });
}
//hospital end
function toggleCategory(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon-rotate');

    content.classList.toggle('active');
    icon.classList.toggle('rotated');
}

// 统一的选项卡管理系统
function initServiceTabs() {
    const buttons = document.querySelectorAll(".filter-btn");
    const contents = document.querySelectorAll(".detail-content");
    let currentIndex = 0;
    let isUserInteracted = false;
    let autoRotateInterval;

    // 切换到指定索引的选项卡
    function switchToTab(index) {
        // 移除所有active状态
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // 设置新的active状态
        if (buttons[index]) {
            buttons[index].classList.add("active");
            const target = buttons[index].getAttribute("data-target");
            const targetElement = document.getElementById(target);
            if (targetElement) {
                targetElement.classList.add("active");
            }
            currentIndex = index;
        }
    }

    // 设置自动轮播
    function startAutoRotation() {
        // 清除现有的定时器
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }

        // 只在用户未交互时启动自动轮播
        if (!isUserInteracted) {
            autoRotateInterval = setInterval(() => {
                let nextIndex = (currentIndex + 1) % buttons.length;
                switchToTab(nextIndex);
            }, 5000); // 5秒切换一次
        }
    }

    // 停止自动轮播
    function stopAutoRotation() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }

    // 按钮点击事件
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            // 用户交互,停止自动轮播
            isUserInteracted = true;
            stopAutoRotation();

            // 切换到点击的选项卡
            switchToTab(index);
        });
    });

    // 初始化:设置第一个选项卡为active并开始轮播
    if (buttons.length > 0) {
        switchToTab(0);
        startAutoRotation();
    }

    // 当页面不可见时暂停轮播
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAutoRotation();
        } else if (!isUserInteracted) {
            startAutoRotation();
        }
    });

    // 返回控制函数,以便外部可以控制
    return {
        switchToTab,
        stopAutoRotation,
        startAutoRotation
    };
}

// 轮播图功能
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const images = document.querySelectorAll('.carousel-item img');
    const dots = document.querySelectorAll('.control-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // 弹出层元素
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    const imageCounter = document.getElementById('imageCounter');

    if (!carousel || items.length === 0) return;

    let currentIndex = 0;
    let intervalId;

    // 更新轮播显示
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 更新指示点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 切换到下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    // 切换到上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // 开始自动轮播
    function startAutoPlay() {
        intervalId = setInterval(nextSlide, 5000); // 5秒切换
    }

    // 停止自动轮播
    function stopAutoPlay() {
        clearInterval(intervalId);
    }

    // 打开弹出层
    function openModal(index) {
        currentIndex = index;
        modalImage.src = images[currentIndex].src;
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    // 关闭弹出层
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复背景滚动
    }

    // 弹出层内切换图片
    function modalNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        modalImage.src = images[currentIndex].src;
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    function modalPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        modalImage.src = images[currentIndex].src;
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    // 事件监听 - 轮播控制
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
    }

    // 指示点点击事件
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
            startAutoPlay();
        });
    });

    // 图片点击事件 - 打开弹出层
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            stopAutoPlay();
            openModal(index);
        });
    });

    // 弹出层控制
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modalNext) {
        modalNext.addEventListener('click', modalNextSlide);
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', modalPrevSlide);
    }

    // 点击弹出层背景关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (modal && modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                modalNextSlide();
            } else if (e.key === 'ArrowLeft') {
                modalPrevSlide();
            }
        }
    });

    // 鼠标悬停时暂停轮播
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // 初始化
    startAutoPlay();
}

// 使用单个DOMContentLoaded事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 默认展开第一个分类
    const firstCategory = document.querySelector('.category-header');
    if (firstCategory) {
        toggleCategory(firstCategory);
    }

    // 初始化统一的选项卡系统
    initServiceTabs();

    // 初始化图片轮播
    initCarousel();
});

// 初始化第二个轮播图
function initSecondCarousel() {
    const carouselContainer = document.querySelectorAll('.carousel-container')[1];
    if (!carouselContainer) return;

    const carousel = carouselContainer.querySelector('.carousel');
    const items = carouselContainer.querySelectorAll('.carousel-item');
    const dots = carouselContainer.querySelectorAll('.control-dot');
    const prevBtn = carouselContainer.querySelector('.prev');
    const nextBtn = carouselContainer.querySelector('.next');

    if (!carousel || items.length === 0) return;

    let currentIndex = 0;

    // 更新轮播显示
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 更新指示点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 切换到下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    // 切换到上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // 事件监听
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // 指示点点击事件
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel();
        });
    });

    // 初始化
    updateCarousel();
}

// 在DOMContentLoaded中调用
document.addEventListener('DOMContentLoaded', function() {
    // 初始化第二个轮播图
    initSecondCarousel();
});


// 简单的轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    // 为每个轮播图容器初始化
    document.querySelectorAll('.carousel-container').forEach(container => {
        const carousel = container.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const dots = container.querySelectorAll('.control-dot');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');

        let currentIndex = 0;
        const totalItems = items.length;

        // 更新轮播图
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            // 更新指示点
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // 下一张
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        // 上一张
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        // 事件监听
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // 点击指示点
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        // 初始化
        updateCarousel();
    });
});