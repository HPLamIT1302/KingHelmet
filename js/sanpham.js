var itemsPerPage = 9;
var productList = [

    // mũ 3/4 đầu
    {
        name: "Mũ 3/4 - Mẫu 1",
        image: "../images/mbh_34/mu34_01.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, phù hợp cho các dòng xe cổ điển và cruiser.",
        price: 500000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 841g ± 50g",
            "- Size XL: 57 - 59cm",
            "- Size L: 56 - 57cm",
            "- Size M: 55 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 2",
        image: "../images/mbh_34/mu34_02.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, thiết kế thời trang, chất lượng cao.",
        price: 520000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 900g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 3",
        image: "../images/mbh_34/mu34_03.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, màu sắc tươi sáng, bảo vệ an toàn khi đi xe.",
        price: 490000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 850g ± 50g",
            "- Size XL: 57 - 59cm",
            "- Size L: 55 - 57cm",
            "- Size M: 53 - 55cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 4",
        image: "../images/mbh_34/mu34_04.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, phong cách đơn giản nhưng hiện đại.",
        price: 480000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 880g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 5",
        image: "../images/mbh_34/mu34_05.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, chất liệu nhẹ và thoáng mát.",
        price: 510000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 900g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 6",
        image: "../images/mbh_34/mu34_06.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, có nhiều màu sắc và kích thước phù hợp.",
        price: 530000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 850g ± 50g",
            "- Size XL: 57 - 59cm",
            "- Size L: 55 - 57cm",
            "- Size M: 53 - 55cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 7",
        image: "../images/mbh_34/mu34_07.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, kiểu dáng độc đáo và thời trang.",
        price: 490000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 860g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 8",
        image: "../images/mbh_34/mu34_08.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, chất liệu chống nắng và chống thấm mồ hôi.",
        price: 540000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 920g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ 3/4 - Mẫu 9",
        image: "../images/mbh_34/mu34_09.jpg",
        category: "Mũ 3/4",
        description: "Mũ bảo hiểm loại 3/4 đầu, đa dạng về kiểu dáng và màu sắc.",
        price: 520000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 880g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },

    // mũ fullface
    {
        name: "Mũ Fullface - Mẫu 1",
        image: "../images/mbh_fullface/full01.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface chất lượng cao, bảo vệ toàn diện cho đầu.",
        price: 800000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 900g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 2",
        image: "../images/mbh_fullface/full02.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface với thiết kế hiện đại và đẳng cấp.",
        price: 820000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 950g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 57 - 59cm",
            "- Size M: 55 - 57cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 3",
        image: "../images/mbh_fullface/full03.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface, một lựa chọn tốt cho những tay lái xe đam mê tốc độ.",
        price: 780000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 920g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 4",
        image: "../images/mbh_fullface/full04.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface với công nghệ tiên tiến, an toàn tuyệt đối.",
        price: 850000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 930g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 5",
        image: "../images/mbh_fullface/full05.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface thời trang, phong cách và độ bền cao.",
        price: 790000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 890g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 6",
        image: "../images/mbh_fullface/full06.jpg",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface với nhiều màu sắc và kiểu dáng đa dạng.",
        price: 830000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 920g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 57 - 59cm",
            "- Size M: 55 - 57cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 7",
        image: "../images/mbh_fullface/full07.png",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface dành cho những tay đua chuyên nghiệp và đam mê thể thao xe đạp.",
        price: 820000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 910g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 8",
        image: "../images/mbh_fullface/full08.png",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface cao cấp với thiết kế đẳng cấp và an toàn.",
        price: 860000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 940g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 57 - 59cm",
            "- Size M: 55 - 57cm"
        ]
    },
    {
        name: "Mũ Fullface - Mẫu 9",
        image: "../images/mbh_fullface/full09.png",
        category: "Mũ Fullface",
        description: "Mũ bảo hiểm Fullface phong cách, an toàn và thoải mái cho mọi hoạt động.",
        price: 800000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 920g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 56 - 58cm",
            "- Size M: 54 - 56cm"
        ]
    },


    {
        name: "Mũ 1/2 - Mẫu 1",
        image: "../images/mbh_12/mu12_01.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, phù hợp cho xe máy phổ thông.",
        price: 400000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 841g ± 50g",
            "- Size XL: 57 - 59cm",
            "- Size L: 56 - 58cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 2",
        image: "../images/mbh_12/mu12_02.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, thiết kế đơn giản nhưng đầy phong cách.",
        price: 420000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 860g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 57 - 59cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 3",
        image: "../images/mbh_12/mu12_03.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, chất liệu nhẹ và thoáng mát.",
        price: 430000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 880g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 58 - 60cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 4",
        image: "../images/mbh_12/mu12_04.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, có nhiều màu sắc và kích thước phù hợp.",
        price: 410000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 850g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 57 - 59cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 5",
        image: "../images/mbh_12/mu12_05.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, kiểu dáng thời trang và hiện đại.",
        price: 390000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 870g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 58 - 60cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 6",
        image: "../images/mbh_12/mu12_06.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, bền bỉ và an toàn khi sử dụng.",
        price: 420000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 880g ± 50g",
            "- Size XL: 58 - 60cm",
            "- Size L: 57 - 59cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 7",
        image: "../images/mbh_12/mu12_07.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, phù hợp cho các dòng xe phổ thông.",
        price: 400000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng fiberglass",
            "- Trọng lượng: 870g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 58 - 60cm"
        ]
    },
    {
        name: "Mũ 1/2 - Mẫu 8",
        image: "../images/mbh_12/mu12_08.png",
        category: "Mũ 1/2",
        description: "Mũ bảo hiểm loại 1/2 đầu, thiết kế thời trang và phong cách.",
        price: 410000,
        discountPercent: 55,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng polycarbonate",
            "- Trọng lượng: 860g ± 50g",
            "- Size XL: 59 - 61cm",
            "- Size L: 58 - 60cm"
        ]
    },

    // Mũ lật cầm
    {
        name: "Mũ lật cằm - Mẫu 1",
        image: "../images/mbh_latcam/latcam01.jpg",
        category: "Mũ lật cằm",
        description: "Mũ bảo hiểm lật cằm tiện dụng, thích hợp cho chạy xe phong cách.",
        price: 600000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 1237g ± 50g",
            "- Size XL: 58 - 59cm",
            "- Size L: 56 - 57cm"
        ]
    },
    {
        name: "Mũ lật cằm - Mẫu 2",
        image: "../images/mbh_latcam/latcam02.jpg",
        category: "Mũ lật cằm",
        description: "Mũ bảo hiểm lật cằm cao cấp, thiết kế thời trang và tiện dụng.",
        price: 620000,
        discountPercent: 35,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 1237g ± 50g",
            "- Size XL: 58 - 59cm",
            "- Size L: 56 - 57cm"
        ]
    },
    {
        name: "Mũ lật cằm - Mẫu 3",
        image: "../images/mbh_latcam/latcam03.jpg",
        category: "Mũ lật cằm",
        description: "Mũ bảo hiểm lật cằm chất lượng, bảo vệ an toàn cho người sử dụng.",
        price: 590000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 1237g ± 50g",
            "- Size XL: 58 - 59cm",
            "- Size L: 56 - 57cm"
        ]
    },
    {
        name: "Mũ lật cằm - Mẫu 4",
        image: "../images/mbh_latcam/latcam04.jpg",
        category: "Mũ lật cằm",
        description: "Mũ bảo hiểm lật cằm đẹp mắt, đảm bảo độ an toàn khi điều khiển xe.",
        price: 580000,
        discountPercent: 40,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 1237g ± 50g",
            "- Size XL: 58 - 59cm",
            "- Size L: 56 - 57cm"
        ]
    },
    {
        name: "Mũ lật cằm - Mẫu 5",
        image: "../images/mbh_latcam/latcam05.jpg",
        category: "Mũ lật cằm",
        description: "Mũ bảo hiểm lật cằm thời trang, phong cách và chất lượng cao.",
        price: 600000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Trọng lượng: 1237g ± 50g",
            "- Size XL: 58 - 59cm",
            "- Size L: 56 - 57cm"
        ]
    },


    {
        name: "Mũ trẻ em - Mẫu 1",
        image: "../images/mbh_treem/treem01.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm dành cho trẻ em, với các hình vẽ và màu sắc bắt mắt.",
        price: 300000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 2",
        image: "../images/mbh_treem/treem02.png",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm dành cho trẻ em, chất liệu nhẹ và an toàn.",
        price: 320000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 3",
        image: "../images/mbh_treem/treem03.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm trẻ em với nhiều họa tiết vui nhộn và bắt mắt.",
        price: 310000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 4",
        image: "../images/mbh_treem/treem04.png",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm dành cho trẻ em, thiết kế độc đáo và đáng yêu.",
        price: 300000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 5",
        image: "../images/mbh_treem/treem05.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm trẻ em với nhiều màu sắc tươi sáng và an toàn.",
        price: 330000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 6",
        image: "../images/mbh_treem/treem06.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm cho trẻ em, chất liệu mềm mại và thoải mái khi đội.",
        price: 315000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 7",
        image: "../images/mbh_treem/treem07.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm trẻ em với thiết kế bắt mắt và an toàn cho bé.",
        price: 325000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 8",
        image: "../images/mbh_treem/treem08.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm trẻ em với nhiều lựa chọn màu sắc và kiểu dáng.",
        price: 310000,
        discountPercent: 30,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },
    {
        name: "Mũ trẻ em - Mẫu 9",
        image: "../images/mbh_treem/treem09.jpg",
        category: "Mũ trẻ em",
        description: "Mũ bảo hiểm trẻ em với họa tiết đáng yêu và bảo vệ an toàn.",
        price: 300000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Thiết kế kính âm đột phá, nhiều màu sắc.",
            "- Trọng lượng: 712g ± 50g",
            "- Size S: 52 - 54cm"
        ]
    },


    // mũ xe đạp
    {
        name: "Mũ xe đạp - Mẫu 1",
        image: "../images/mbh_xedap/muxedap01.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm phù hợp cho các tín đồ đạp xe, bảo vệ an toàn khi đi xe đạp.",
        price: 250000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 2",
        image: "../images/mbh_xedap/muxedap02.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm cho người đi xe đạp, thiết kế đơn giản và nhẹ nhàng.",
        price: 260000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 3",
        image: "../images/mbh_xedap/muxedap03.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp chất lượng cao, an toàn khi điều khiển xe.",
        price: 255000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 4",
        image: "../images/mbh_xedap/muxedap04.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm phù hợp cho các tay đua xe đạp, tăng tính thẩm mỹ và bảo vệ.",
        price: 270000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 5",
        image: "../images/mbh_xedap/muxedap05.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp nhẹ nhàng và thoải mái, giúp bảo vệ an toàn.",
        price: 245000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 6",
        image: "../images/mbh_xedap/muxedap06.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp với nhiều lựa chọn màu sắc và kiểu dáng.",
        price: 260000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 7",
        image: "../images/mbh_xedap/muxedap07.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp thời trang, phong cách và an toàn.",
        price: 250000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 8",
        image: "../images/mbh_xedap/muxedap08.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp với thiết kế hiện đại và đa dạng.",
        price: 265000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },
    {
        name: "Mũ xe đạp - Mẫu 9",
        image: "../images/mbh_xedap/muxedap09.jpg",
        category: "Mũ xe đạp",
        description: "Mũ bảo hiểm xe đạp chất lượng cao, an toàn và thời trang.",
        price: 255000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Vỏ bằng nhựa ABS nguyên sinh",
            "- Xốp EPS",
            "- Trọng lượng: 350 gram",
            "- Size: Freesize (58 - 60) - có hệ thống Roc - Lock dễ dàng tăng chỉnh vòng đầu."
        ]
    },

    // kinh mũ bao hiẻm
    {
        name: "Kính mũ bảo hiểm - Mẫu 1",
        image: "../images/mbh_kinh/kinh01.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm thời trang, bổ sung thêm phong cách khi đi xe.",
        price: 100000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Kính có màu trắng trong giúp người dùng rõ mắt khi đi trời nắng, không bị hạn chế khả năng nhìn khi đi trong đêm."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 2",
        image: "../images/mbh_kinh/kinh02.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm với thiết kế hiện đại và đa dạng màu sắc.",
        price: 120000,
        discountPercent: 15,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Được sản xuất với công nghệ hiện đại giúp cho hình ảnh chuẩn không hại mắt, hạn chế tối đa khả năng oxi hóa nhựa do thời tiết đảm bảo cho kính giữ được độ trong trên 2 năm sử dụng."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 3",
        image: "../images/mbh_kinh/kinh03.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm đa năng, chất liệu chắc chắn và bền bỉ.",
        price: 90000,
        discountPercent: 5,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Có tác dụng bảo vệ mắt trong điều kiện mưa gió, bụi đường, chống côn trùng."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 4",
        image: "../images/mbh_kinh/kinh04.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm nhẹ và thoải mái, phù hợp với mọi loại mũ.",
        price: 95000,
        discountPercent: 0,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Được sản xuất với công nghệ hiện đại giúp cho hình ảnh chuẩn không hại mắt, hạn chế tối đa khả năng oxi hóa nhựa do thời tiết."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 5",
        image: "../images/mbh_kinh/kinh05.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm thời trang, bảo vệ mắt hiệu quả khi đi xe.",
        price: 110000,
        discountPercent: 20,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Kính có màu trắng trong giúp người dùng rõ mắt khi đi trời nắng, không bị hạn chế khả năng nhìn khi đi trong đêm."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 6",
        image: "../images/mbh_kinh/kinh06.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm đa dạng kiểu dáng, phù hợp với mọi lứa tuổi.",
        price: 105000,
        discountPercent: 10,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Được sản xuất với công nghệ hiện đại giúp cho hình ảnh chuẩn không hại mắt, hạn chế tối đa khả năng oxi hóa nhựa do thời tiết."
        ]
    },
    {
        name: "Kính mũ bảo hiểm - Mẫu 7",
        image: "../images/mbh_kinh/kinh07.jpg",
        category: "Kính mũ bảo hiểm",
        description: "Kính mũ bảo hiểm sang trọng, đem lại phong cách cá tính.",
        price: 115000,
        discountPercent: 25,
        get discountPrice() {
            return this.price * (1 - this.discountPercent / 100);
        },
        details: [
            "- Chất liệu: PolyCarbonat",
            "- Kính có màu trắng trong giúp người dùng rõ mắt khi đi trời nắng, không bị hạn chế khả năng nhìn khi đi trong đêm."
        ]
    },
];



//hien thi san pham
function displayProducts(productList, categoryName) {
    var itemsPerPage = 12;
    var currentPage = 1;

    // Lọc danh sách sản phẩm theo danh mục nếu categoryName không phải là 'all'
    var filteredProducts = categoryName === 'all' ? productList : productList.filter(function (product) {
        return product.category === categoryName;
    });

    // Function to render products based on pagination
    function renderProducts(page) {
        $('#productList').empty();

        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
        var productListHtml = '';

        for (var i = startIndex; i < endIndex; i++) {
            var product = filteredProducts[i];
            var hasDiscount = product.discountPercent > 0;

            var productHtml = `
                <div class="col-md-4 col-lg-3 col-6 mb-3">
                    <div class="product-card" data-product='${JSON.stringify(product)}'>
                        <img src="${product.image}" alt="${product.name}" class="product-image img-fluid">
                        <div class="product-content d-flex flex-column">
                            <div class="product-title">${product.name}</div>
                            <div class="product-description">${product.description}</div>
                            <div class="product-price-container">
                                ${hasDiscount ? `<div class="product-discount">${product.price.toLocaleString()} VND</div>` : ''}
                                <div class="product-price">${discountPrice.toLocaleString()} VND</div>
                            </div>
                        </div>
                        <div class="btn-discount ${hasDiscount ? '' : 'd-none'}">${hasDiscount ? `-${product.discountPercent.toLocaleString()}%` : ''}</div>
                    </div>
                </div>
            `;

            productListHtml += productHtml;
        }

        $('#productList').html(productListHtml);

        // Create pagination
        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        $('#pagination').empty();
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = i === currentPage ? 'active' : '';
            $('#pagination').append(`
                <li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
            `);
        }
    }

    // Display initial products
    renderProducts(currentPage);

    // Handle pagination click
    $(document).on('click', '#pagination .page-link', function (e) {
        e.preventDefault();
        currentPage = $(this).data('page');
        renderProducts(currentPage);
        // Scroll to top of the page
        $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
    });

}





// Khai báo hàm khi tài liệu đã sẵn sàng hiển thị modal
$(document).ready(function () {
    // Sự kiện click vào .product-card
    $(document).on('click', '.product-card', function () {
        var product = $(this).data('product');
        showModal(product);
    });

    function showModal(product) {
        $('#productModalLabel').text(product.name);

        var modalContent = `
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="zoomImg p-4">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6 col-lg-8 col-12">
                    <p><strong>Loại sản phẩm:</strong> ${product.category}</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
                
        `;
      
        console.log(discountPercent + 'và' + discountPrice);

        // Kiểm tra và hiển thị chi tiết sản phẩm nếu có
        if (product.details && product.details.length > 0) {
            modalContent += `<p><strong>Chi tiết sản phẩm:</strong></p>`;
            modalContent += `<ul>`;
            product.details.forEach(detail => {
                modalContent += `<li>${detail}</li>`;
            });
            modalContent += `</ul>`;
        }

       
        if (pproduct.discountPercent > 0) {
            modalContent += `
            <div class="product-price-container">
                <div class="product-discount"><strong>Giá gốc:</strong>  ${product.price.toLocaleString()} </div>
                <div class="product-price"><strong>Giá khuyến mãi:</strong> ${product.discountPrice.toLocaleString()} </div>
                <div class="btn-discount"><strong>Giảm giá:</strong> ${discountPercent}%</div>
           </div>
            `;
        } else {
            // Kiểm tra và xử lý phần trăm giảm giá
            var discountPercent = parseFloat(product.discountPercent);
            if (!isNaN(discountPercent)) {
                // Tính giá sau khi giảm và lưu vào biến discountPrice
                var discountPrice = product.price * (1 - discountPercent / 100);
                console.log(discountPercent + ' và ' + discountPrice); // Debug log
                modalContent += `
                        <div class="product-price-container">
                            <div class="product-price "><strong>Giá bán: </strong> ${product.price.toLocaleString()}</div>
                        </div>
                `;
            }
        }

      
        modalContent += `
            <div class="input-group mt-3">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-minus">-</button>
                </span>
                <input type="number" class="form-control text-center product-quantity" value="1">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-plus">+</button>
                </span>
            </div>
            <button class="btn btn-info btn-sm btn-add-to-cart mt-3" data-name="${product.name}" data-price="${product.price}">Thêm vào giỏ hàng</button>
            <button class="btn btn-success btn-sm btn-buy-now mt-3" data-name="${product.name}" data-price="${product.price}">Mua ngay</button>
        </div>
        </div>`;

        $('#productModalBody').html(modalContent);

        $('#productModal').modal('show');
        // xử lý các nút bấm

        // Xử lý sự kiện click nút thêm số lượng
        $(document).on('click', '.btn-plus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            input.val(value + 1);
        });

        // Xử lý sự kiện click nút trừ số lượng
        $(document).on('click', '.btn-minus', function () {
            var input = $(this).closest('.input-group').find('input.product-quantity');
            var value = parseInt(input.val());
            if (value > 1) {
                input.val(value - 1);
            }
        });

        // Handle "Thêm vào giỏ hàng" button click
        $(document).on('click', '.btn-add-to-cart', function () {
            var name = $(this).data('name');
            var priceString = $(this).data('price');

            // Loại bỏ dấu chấm và dấu phân cách hàng nghìn (nếu có)
            var priceCleaned = priceString.replace(/\./g, '');

            // Chuyển đổi chuỗi thành số nguyên
            var price = parseInt(priceCleaned);

            var quantity = parseInt($(this).closest('.col-12').find('.product-quantity').val());


            // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
            displayAddToCartAlert(name, price, quantity);

            // Thêm sản phẩm vào giỏ hàng
            addToCart(name, price, quantity);
        });

        // Function to display add to cart alert
        function displayAddToCartAlert(name, price, quantity) {
            var alertHtml = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>${quantity} x ${name}</strong> đã được thêm vào giỏ hàng với đơn giá ${price} VND.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;

            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);

            // Tự động đóng thông báo sau 10 giây
            setTimeout(function () {
                $('.alert').alert('close');
            }, 10000); // 10 giây
        }
        function addToCart(name, price, quantity) {
            const total = quantity * price;
            console.log('Đã thêm! chưa xử lỹ code này ở js.sanpham.js line 1082');
            console.log(name + " với giá: " + price + " và số lượng: " + quantity + "- Thành tiền: " + total);
        }

        // Handle "Mua ngay" button click
        $(document).on('click', '.btn-buy-now', function () {
            var name = $(this).data('name');
            var priceString = $(this).data('price');

            // Loại bỏ dấu chấm và dấu phân cách hàng nghìn (nếu có)
            var priceCleaned = priceString.replace(/\./g, '');

            // Chuyển đổi chuỗi thành số nguyên
            var price = parseInt(priceCleaned);

            var quantity = parseInt($(this).closest('.col-12').find('.product-quantity').val());

            // Hiển thị thông báo chuyển hướng sang trang thanh toán
            displayCheckoutRedirectAlert(name, price, quantity);
        });

        // Function to display add to cart alert
        function displayCheckoutRedirectAlert(name, price, quantity) {
            console.log('Giá:', price);
            console.log('Số lượng:', quantity);

            try {
                const total = quantity * price;
                console.log('Sản phẩm:', name, 'với giá:', price, 'và số lượng:', quantity, '- Thành tiền:', total);
            } catch (error) {
                console.error('Lỗi khi tính tổng:', error);
            }
            console.log('Đã mua! chưa xử lỹ code này ở js.sanpham.js line 1082');


            var alertHtml = `
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <strong>${quantity} x ${name}</strong> đã được mua với giá ${price} VND.
                        <br>
                        <strong>Total: ${(quantity * price).toLocaleString()}</strong>
                        <p>Đang chuyển hướng sang trang thanh toán</p>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `;

            // Hiển thị thông báo trong phần tử có id là 'alertContainer'
            $('#alertContainer').html(alertHtml);

            // Tự động đóng thông báo sau 10 giây
            setTimeout(function () {
                $('.alert').alert('close');
            }, 50000); // 10 giây
        }


    }

});


