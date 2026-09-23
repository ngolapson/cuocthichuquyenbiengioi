import { Question } from '../types';

export const EXAM_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Đường biên giới đất liền giữa tỉnh Lạng Sơn (Việt Nam) và Khu tự trị dân tộc Choang Quảng Tây (Trung Quốc) có chiều dài khoảng bao nhiêu km?",
    options: [
      { key: 'A', text: "Khoảng 185,5 km" },
      { key: 'B', text: "Khoảng 231,74 km" },
      { key: 'C', text: "Khoảng 310,2 km" },
      { key: 'D', text: "Khoảng 150,8 km" },
    ],
    correctAnswer: 'B',
    explanation: "Đường biên giới đất liền giữa tỉnh Lạng Sơn (Việt Nam) và Khu tự trị dân tộc Choang Quảng Tây (Trung Quốc) có chiều dài khoảng 231,74 km, với 474 cột mốc quốc giới."
  },
  {
    id: 2,
    question: "Tỉnh Lạng Sơn có bao nhiêu huyện giáp biên giới với nước Cộng hòa Nhân dân Trung Hoa?",
    options: [
      { key: 'A', text: "3 huyện (Cao Lộc, Lộc Bình, Đình Lập)" },
      { key: 'B', text: "4 huyện (Tràng Định, Văn Lãng, Cao Lộc, Lộc Bình)" },
      { key: 'C', text: "5 huyện (Tràng Định, Văn Lãng, Cao Lộc, Lộc Bình, Đình Lập)" },
      { key: 'D', text: "6 huyện (Tràng Định, Văn Lãng, Cao Lộc, Lộc Bình, Đình Lập, Chi Lăng)" },
    ],
    correctAnswer: 'C',
    explanation: "Lạng Sơn có 5 huyện biên giới tiếp giáp Trung Quốc gồm: Tràng Định, Văn Lãng, Cao Lộc, Lộc Bình và Đình Lập, trải dài qua 21 xã, thị trấn biên giới."
  },
  {
    id: 3,
    question: "Cửa khẩu quốc tế đường bộ quan trọng nhất nối liền tỉnh Lạng Sơn (Việt Nam) với Bằng Tường, Quảng Tây (Trung Quốc) là cửa khẩu nào?",
    options: [
      { key: 'A', text: "Cửa khẩu quốc tế Hữu Nghị" },
      { key: 'B', text: "Cửa khẩu Tân Thanh" },
      { key: 'C', text: "Cửa khẩu Chi Ma" },
      { key: 'D', text: "Cửa khẩu Bình Nghi" },
    ],
    correctAnswer: 'A',
    explanation: "Cửa khẩu Quốc tế Hữu Nghị là cửa khẩu quốc tế đường bộ đầu mối, điểm nối tuyến cao tốc Nam Ninh - Hà Nội, là cầu nối huyết mạch trong hành lang kinh tế Bắc Nam."
  },
  {
    id: 4,
    question: "Cửa khẩu quốc tế ga đường sắt liên vận trên địa bàn tỉnh Lạng Sơn có tên là gì?",
    options: [
      { key: 'A', text: "Ga Lạng Sơn" },
      { key: 'B', text: "Ga quốc tế Đồng Đăng" },
      { key: 'C', text: "Ga Na Sầm" },
      { key: 'D', text: "Ga Bản Thín" },
    ],
    correctAnswer: 'B',
    explanation: "Ga quốc tế Đồng Đăng (thị trấn Đồng Đăng, huyện Cao Lộc) là ga đường sắt quốc tế liên vận sang Bằng Tường (Trung Quốc)."
  },
  {
    id: 5,
    question: "Cột mốc biên giới số 1116 và 1117 đặt tại khu vực cửa khẩu nào của tỉnh Lạng Sơn?",
    options: [
      { key: 'A', text: "Cửa khẩu Tân Thanh" },
      { key: 'B', text: "Cửa khẩu quốc tế Hữu Nghị" },
      { key: 'C', text: "Cửa khẩu Chi Ma" },
      { key: 'D', text: "Cửa khẩu Cốc Nam" },
    ],
    correctAnswer: 'B',
    explanation: "Cột mốc đôi 1116 (Việt Nam) và 1117 (Trung Quốc) được cắm trang trọng tại km0 Cửa khẩu quốc tế Hữu Nghị, biểu tượng cho đường biên giới hòa bình, hữu nghị."
  },
  {
    id: 6,
    question: "Luật Biên phòng Việt Nam được Quốc hội khóa XIV thông qua năm 2020 chính thức có hiệu lực thi hành từ ngày nào?",
    options: [
      { key: 'A', text: "Ngày 01 tháng 01 năm 2021" },
      { key: 'B', text: "Ngày 01 tháng 07 năm 2021" },
      { key: 'C', text: "Ngày 01 tháng 01 năm 2022" },
      { key: 'D', text: "Ngày 03 tháng 03 năm 2022" },
    ],
    correctAnswer: 'C',
    explanation: "Luật Biên phòng Việt Nam số 66/2020/QH14 được Quốc hội thông qua ngày 11/11/2020 và có hiệu lực thi hành từ ngày 01/01/2022."
  },
  {
    id: 7,
    question: "Theo quy định pháp luật hiện hành, lực lượng nào là lực lượng nòng cốt, chuyên trách quản lý, bảo vệ biên giới quốc gia, giữ gìn trật tự, an toàn xã hội ở khu vực biên giới?",
    options: [
      { key: 'A', text: "Bộ đội Biên phòng" },
      { key: 'B', text: "Lực lượng Hải quan" },
      { key: 'C', text: "Dân quân tự vệ địa phương" },
      { key: 'D', text: "Công an xã" },
    ],
    correctAnswer: 'A',
    explanation: "Theo Luật Biên phòng Việt Nam, Bộ đội Biên phòng là lực lượng chuyên trách, nòng cốt chủ trì phối hợp với các lực lượng bảo vệ vững chắc biên cương Tổ quốc."
  },
  {
    id: 8,
    question: "Ngày truyền thống Bộ đội Biên phòng và Ngày Biên phòng toàn dân là ngày nào hằng năm?",
    options: [
      { key: 'A', text: "Ngày 22 tháng 12" },
      { key: 'B', text: "Ngày 03 tháng 03" },
      { key: 'C', text: "Ngày 19 tháng 08" },
      { key: 'D', text: "Ngày 27 tháng 07" },
    ],
    correctAnswer: 'B',
    explanation: "Ngày 03/3/1959, Thủ tướng Chính phủ ban hành Nghị định 100/TTg thành lập lực lượng Công an nhân dân Vũ trang (nay là Bộ đội Biên phòng). Hằng năm ngày 03/3 là Ngày truyền thống BĐBP và Ngày Biên phòng toàn dân."
  },
  {
    id: 9,
    question: "Ba văn kiện pháp lý về biên giới đất liền Việt Nam - Trung Quốc được ký kết chính thức vào năm nào?",
    options: [
      { key: 'A', text: "Năm 1999" },
      { key: 'B', text: "Năm 2003" },
      { key: 'C', text: "Năm 2009" },
      { key: 'D', text: "Năm 2015" },
    ],
    correctAnswer: 'C',
    explanation: "Ngày 18/11/2009, 3 văn kiện pháp lý biên giới đất liền Việt - Trung được ký kết tại Bắc Kinh gồm: Nghị định thư phân giới cắm mốc, Hiệp định quy chế quản lý biên giới và Hiệp định về cửa khẩu và quy chế quản lý cửa khẩu."
  },
  {
    id: 10,
    question: "Cửa khẩu song phương Chi Ma thuộc địa phận huyện nào của tỉnh Lạng Sơn?",
    options: [
      { key: 'A', text: "Huyện Lộc Bình" },
      { key: 'B', text: "Huyện Đình Lập" },
      { key: 'C', text: "Huyện Cao Lộc" },
      { key: 'D', text: "Huyện Văn Lãng" },
    ],
    correctAnswer: 'A',
    explanation: "Cửa khẩu Chi Ma thuộc xã Yên Khoái, huyện Lộc Bình, tỉnh Lạng Sơn, đối diện là Cửa khẩu Ái Điểm (Trung Quốc)."
  },
  {
    id: 11,
    question: "Theo Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ, phong trào toàn dân tham gia bảo vệ chủ quyền biên giới có nội dung gì?",
    options: [
      { key: 'A', text: "Chỉ dành riêng cho lực lượng kiểm lâm biên giới" },
      { key: 'B', text: "Toàn dân tham gia bảo vệ chủ quyền lãnh thổ, an ninh biên giới quốc gia trong tình hình mới" },
      { key: 'C', text: "Quy định chỉ thanh niên mới được tham gia tuần tra biên giới" },
      { key: 'D', text: "Toàn dân tham gia phát triển kinh tế thương mại biên mậu" },
    ],
    correctAnswer: 'B',
    explanation: "Chỉ thị số 01/CT-TTg ngày 09/01/2015 của Thủ tướng Chính phủ về tổ chức phong trào 'Toàn dân tham gia bảo vệ chủ quyền lãnh thổ, an ninh biên giới quốc gia trong tình hình mới'."
  },
  {
    id: 12,
    question: "Hành vi nào sau đây bị NGHIÊM CẤM theo quy định của pháp luật về bảo vệ biên giới quốc gia?",
    options: [
      { key: 'A', text: "Đăng ký tạm trú, tạm vắng đúng thủ tục khi vào khu vực biên giới" },
      { key: 'B', text: "Làm sai lệch, xê dịch, phá hoại mốc quốc giới; xả thải chất độc hại gây ô nhiễm vùng biên giới" },
      { key: 'C', text: "Tham gia các tổ tự quản đường biên mốc giới theo sự phân công" },
      { key: 'D', text: "Giao thương hàng hóa qua cửa khẩu chính ngạch đúng thủ tục hải quan" },
    ],
    correctAnswer: 'B',
    explanation: "Làm sai lệch, xê dịch, phá hoại mốc quốc giới, làm thay đổi dòng chảy tự nhiên sông suối biên giới hoặc gây ô nhiễm môi trường là hành vi bị nghiêm cấm tuyệt đối theo Luật Biên giới quốc gia."
  },
  {
    id: 13,
    question: "Cửa khẩu Tân Thanh – trung tâm giao thương nông sản nổi tiếng giữa Việt Nam và Trung Quốc – nằm trên địa bàn huyện nào?",
    options: [
      { key: 'A', text: "Huyện Văn Lãng" },
      { key: 'B', text: "Huyện Tràng Định" },
      { key: 'C', text: "Huyện Cao Lộc" },
      { key: 'D', text: "Huyện Hữu Lũng" },
    ],
    correctAnswer: 'A',
    explanation: "Cửa khẩu Tân Thanh nằm tại xã Tân Thanh, huyện Văn Lãng, tỉnh Lạng Sơn, là trung tâm xuất nhập khẩu nông sản lớn nhất miền Bắc sang Trung Quốc."
  },
  {
    id: 14,
    question: "Mô hình thắt chặt tình đoàn kết giữa các đơn vị lực lượng bảo vệ biên giới hai nước Việt Nam - Trung Quốc tại Lạng Sơn là gì?",
    options: [
      { key: 'A', text: "Mô hình 'Đồn - Trạm hữu nghị, Cửa khẩu hài hòa, Biên giới bình yên'" },
      { key: 'B', text: "Mô hình liên hoan văn nghệ biên mậu tự phát" },
      { key: 'C', text: "Mô hình tuần tra đơn phương không thông báo" },
      { key: 'D', text: "Mô hình trao đổi văn bản qua trung gian thứ ba" },
    ],
    correctAnswer: 'A',
    explanation: "Mô hình kết nghĩa 'Đồn - Trạm hữu nghị, Cửa khẩu hài hòa, Biên giới bình yên' và kết nghĩa cụm dân cư hai bên biên giới là điểm sáng ngoại giao nhân dân tại Lạng Sơn."
  },
  {
    id: 15,
    question: "Huyện biên giới nằm ở cực Bắc của tỉnh Lạng Sơn, giáp với huyện Long Châu (Quảng Tây, Trung Quốc) và tỉnh Cao Bằng là huyện nào?",
    options: [
      { key: 'A', text: "Huyện Đình Lập" },
      { key: 'B', text: "Huyện Tràng Định" },
      { key: 'C', text: "Huyện Bắc Sơn" },
      { key: 'D', text: "Huyện Bình Gia" },
    ],
    correctAnswer: 'B',
    explanation: "Huyện Tràng Định nằm ở phía bắc tỉnh Lạng Sơn, có đường biên giới giáp với Trung Quốc và giáp ranh tỉnh Cao Bằng."
  },
  {
    id: 16,
    question: "Huyện biên giới nằm ở phía Đông Nam tỉnh Lạng Sơn, giáp với huyện Ninh Minh (Quảng Tây, Trung Quốc) và tỉnh Quảng Ninh là huyện nào?",
    options: [
      { key: 'A', text: "Huyện Đình Lập" },
      { key: 'B', text: "Huyện Lộc Bình" },
      { key: 'C', text: "Huyện Chi Lăng" },
      { key: 'D', text: "Huyện Hữu Lũng" },
    ],
    correctAnswer: 'A',
    explanation: "Huyện Đình Lập nằm ở phía đông nam tỉnh Lạng Sơn, giáp Trung Quốc, đồng thời giáp các tỉnh Quảng Ninh và Bắc Giang."
  },
  {
    id: 17,
    question: "Công dân khi phát hiện hành vi xâm phạm đường biên, mốc quốc giới hoặc vượt biên trái phép cần báo ngay cho cơ quan nào gần nhất?",
    options: [
      { key: 'A', text: "Chờ đến cuối năm mới lập tờ trình gửi Ban Thư ký" },
      { key: 'B', text: "Đồn Biên phòng, Công an hoặc chính quyền địa phương nơi gần nhất" },
      { key: 'C', text: "Tự ý thương lượng giải quyết với người vi phạm" },
      { key: 'D', text: "Quay clip đăng tải lên mạng xã hội câu like" },
    ],
    correctAnswer: 'B',
    explanation: "Khi phát hiện các dấu hiệu vi phạm chủ quyền biên giới, công dân có trách nhiệm thông báo ngay cho Đồn Biên phòng, chính quyền địa phương hoặc cơ quan công an gần nhất để xử lý kịp thời."
  },
  {
    id: 18,
    question: "Chương trình nào do Bộ đội Biên phòng Lạng Sơn triển khai mang ý nghĩa nhân văn sâu sắc, nâng đỡ các em học sinh có hoàn cảnh khó khăn ở khu vực biên giới cắp sách đến trường?",
    options: [
      { key: 'A', text: "'Nâng bước em tới trường - Con nuôi đồn Biên phòng'" },
      { key: 'B', text: "'Học bổng thanh niên xung kích'" },
      { key: 'C', text: "'Trường học biên cương xanh'" },
      { key: 'D', text: "'Áo ấm mùa đông rẻo cao'" },
    ],
    correctAnswer: 'A',
    explanation: "Chương trình 'Nâng bước em tới trường - Con nuôi đồn Biên phòng' được BĐBP Lạng Sơn nhận đỡ đầu hàng trăm học sinh nghèo vượt khó tại các xã biên giới."
  },
  {
    id: 19,
    question: "Đỉnh Mẫu Sơn hùng vĩ, nổi tiếng với độ cao trên 1.500m so với mực nước biển, thuộc địa phận các huyện nào của tỉnh Lạng Sơn?",
    options: [
      { key: 'A', text: "Huyện Lộc Bình và huyện Cao Lộc" },
      { key: 'B', text: "Huyện Văn Lãng và huyện Tràng Định" },
      { key: 'C', text: "Huyện Bắc Sơn và huyện Bình Gia" },
      { key: 'D', text: "Huyện Chi Lăng và huyện Hữu Lũng" },
    ],
    correctAnswer: 'A',
    explanation: "Dãy núi Mẫu Sơn nằm ở phía đông bắc tỉnh Lạng Sơn, thuộc địa phận 2 huyện Lộc Bình và Cao Lộc, là vành đai tự nhiên kiên cố bảo vệ biên giới."
  },
  {
    id: 20,
    question: "Để xây dựng đường biên giới hòa bình, hữu nghị, ổn định, hợp tác và phát triển lâu dài, giải pháp then chốt xuyên suốt là gì?",
    options: [
      { key: 'A', text: "Phát huy sức mạnh tổng hợp của cả hệ thống chính trị và toàn dân, kết hợp chặt chẽ giữa quốc phòng - an ninh với đối ngoại và phát triển kinh tế" },
      { key: 'B', text: "Đóng cửa tất cả các cửa khẩu biên giới" },
      { key: 'C', text: "Chỉ dựa vào sự viện trợ từ các tổ chức phi chính phủ" },
      { key: 'D', text: "Giao toàn bộ công tác bảo vệ biên giới cho các lực lượng tình nguyện viên" },
    ],
    correctAnswer: 'A',
    explanation: "Quan điểm nhất quán của Đảng và Nhà nước ta là phát huy sức mạnh khối đại đoàn kết toàn dân, kết hợp quốc phòng an ninh với kinh tế và ngoại giao để giữ vững từng tấc đất thiêng liêng của Tổ quốc."
  }
];
