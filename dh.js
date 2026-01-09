const personnelData = [
        {
          id: 1,
          name: "Nguyễn Phú Trọng",
          role: "Tổng Bí thư (1944 - 2024)",
          group: "TBT",
          home: "Hà Nội",
          edu: "Giáo sư, Tiến sĩ Chính trị học",
          img: "https://vcdn1-giaitri.vnecdn.net/2024/07/19/anh-chan-dung-tong-bi-thu-ngu-3882-6229-1721392650.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=I3hIidr0126v7w3571C6rg",
          events: [
            { y: "2011 - 2024", t: "Tổng Bí thư Ban Chấp hành Trung ương Đảng." },
            { y: "2018 - 2021", t: "Chủ tịch nước CHXHCN Việt Nam." },
            { y: "02/02/2023", t: "Trao tặng Huy hiệu 55 năm tuổi Đảng." },
            { y: "18/07/2024", t: "Trao tặng Huân chương Sao Vàng." },
          ],
        },
        {
          id: 2,
          name: "Tô Lâm",
          role: "Tổng Bí thư",
          group: "TBT",
          home: "Hưng Yên",
          edu: "Giáo sư, Tiến sĩ Luật học",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/To_Lam_2024.jpg/250px-To_Lam_2024.jpg",
          events: [
            { y: "2024", t: "Được bầu làm Tổng Bí thư Ban Chấp hành Trung ương Đảng." },
            { y: "2024", t: "Chủ tịch nước CHXHCN Việt Nam." },
          ],
        },
        {
          id: 3,
          name: "Phạm Minh Chính",
          role: "Thủ tướng Chính phủ",
          group: "BCT",
          home: "Thanh Hóa",
          edu: "Tiến sĩ Luật học",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ph%E1%BA%A1m_Minh_Ch%C3%ADnh_2021.jpg/250px-Ph%E1%BA%A1m_Minh_Ch%C3%ADnh_2021.jpg",
          events: [{ y: "2021", t: "Được bầu làm Thủ tướng Chính phủ." }],
        },
        {
          id: 4,
          name: "Trần Thanh Mẫn",
          role: "Chủ tịch Quốc hội",
          group: "BCT",
          home: "Hậu Giang",
          edu: "Tiến sĩ Kinh tế",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tran_Thanh_Man.jpg/250px-Tran_Thanh_Man.jpg",
          events: [{ y: "2024", t: "Được bầu làm Chủ tịch Quốc hội." }],
        },
        {
          id: 5,
          name: "Lương Cường",
          role: "Thường trực Ban Bí thư",
          group: "BCT",
          home: "Phú Thọ",
          edu: "Cử nhân Xây dựng Đảng",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/General_Luong_Cuong.jpg/250px-General_Luong_Cuong.jpg",
          events: [{ y: "2024", t: "Thường trực Ban Bí thư." }],
        },
        {
          id: 6,
          name: "Nguyễn Doãn Anh",
          role: "Ủy viên Trung ương Đảng",
          group: "BBT",
          home: "Hà Nội",
          edu: "Trung tướng",
          img: "https://vcdn1-video.vnecdn.net/2022/11/03/trung-tuong-nguyen-doan-anh-lam-1667468694-5517-1667468759.jpg",
          events: [{ y: "2022", t: "Phó Tổng Tham mưu trưởng QĐND Việt Nam" }],
        },
      ];

      /** * 2. HÀM KHỞI TẠO GIAO DIỆN (HTML TRONG JS)
       */
      function initApp() {
        const app = document.getElementById("app-nhansu");

        // --- CHÈN CSS ---
        const style = document.createElement("style");
        style.textContent = `
                :root { --primary-red: #b31f24; --gold: #d4af37; --dark-blue: #0a2558; --bg: #fdfaf5; --shadow: 0 4px 15px rgba(0,0,0,0.1); }
                body { font-family: 'Montserrat', sans-serif; background: var(--bg); margin: 0; color: #333; }
                .container { max-width: 1400px; margin: 0 auto; padding: 50px 20px; }
                
                h1.main-title { text-align: center; color: var(--primary-red); font-size: 2.2rem; text-transform: uppercase; margin-bottom: 40px; }
                h2.sub-title { text-align: center; color: var(--primary-red); text-transform: uppercase; font-size: 1.4rem; margin: 30px 0; position: relative; }
                h2.sub-title::after { content: ""; display: block; width: 50px; height: 2px; background: var(--gold); margin: 8px auto; }

                /* Lãnh đạo Card */
                .leader-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-bottom: 50px; }
                .card { background: white; width: 260px; padding: 20px; border-radius: 12px; box-shadow: var(--shadow); text-align: center; cursor: pointer; transition: 0.3s; border-bottom: 4px solid transparent; }
                .card:hover { transform: translateY(-5px); border-bottom-color: var(--gold); }
                .card img { width: 140px; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 15px; border: 1px solid #eee; }
                .card h3 { color: var(--dark-blue); font-size: 0.95rem; text-transform: uppercase; margin-bottom: 5px; }
                .card p { color: #666; font-size: 0.8rem; font-weight: 500; }

                /* Personnel Layout */
                .personnel-section { display: flex; gap: 30px; margin-top: 60px; border-top: 1px solid #ddd; padding-top: 50px; }
                .sidebar { flex: 0 0 300px; background: #efe6d8; padding: 25px; border-radius: 15px; position: sticky; top: 20px; height: fit-content; }
                .sidebar h4 { font-size: 0.85rem; color: #5d4037; margin-bottom: 15px; text-transform: uppercase; border-left: 4px solid var(--primary-red); padding-left: 10px; }
                .search-box { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 20px; outline: none; }
                .check-item { display: flex; align-items: center; margin-bottom: 10px; font-size: 0.85rem; cursor: pointer; }
                .check-item input { margin-right: 10px; accent-color: var(--primary-red); }
                .select-box { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ccc; margin-bottom: 10px; background: white; }

                .grid { flex: 1; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 15px; }
                .mini-card { background: white; display: flex; padding: 10px; border-radius: 8px; border: 1px solid #eee; transition: 0.3s; cursor: pointer; animation: fadeIn 0.4s ease; }
                .mini-card:hover { border-color: var(--gold); background: #fffcf5; }
                .mini-card img { width: 70px; height: 90px; object-fit: cover; border-radius: 4px; margin-right: 15px; }
                .mini-card h5 { font-size: 0.9rem; margin-bottom: 5px; text-transform: uppercase; }
                .mini-card p { font-size: 0.75rem; color: #666; margin: 0; line-height: 1.4; }

                /* Modal (Chuẩn image_d6cb77) */
                .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); display: none; justify-content: center; align-items: center; z-index: 1000; backdrop-filter: blur(5px); }
                .modal-content { background: white; width: 90%; max-width: 900px; border-radius: 20px; overflow: hidden; display: flex; position: relative; }
                .close { position: absolute; top: 15px; right: 20px; font-size: 28px; cursor: pointer; color: #333; z-index: 11; }
                .m-left { flex: 0 0 35%; background: var(--dark-blue); color: white; padding: 40px 20px; text-align: center; }
                .m-left img { width: 180px; height: 230px; border: 3px solid var(--gold); border-radius: 10px; margin-bottom: 25px; object-fit: cover; }
                .m-left h2 { color: var(--primary-red); font-size: 1.5rem; text-transform: uppercase; margin-bottom: 10px; position: relative; padding-bottom: 10px; }
                .m-left h2::after { content: ""; position: absolute; bottom: 0; left: 25%; width: 50%; height: 2px; background: var(--gold); }
                .m-right { flex: 1; padding: 40px; overflow-y: auto; max-height: 85vh; }
                .m-right h3 { color: var(--primary-red); font-size: 1.1rem; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
                .timeline { border-left: 2px solid var(--gold); padding-left: 25px; margin-top: 20px; }
                .timeline-item { position: relative; margin-bottom: 20px; }
                .timeline-item::before { content: ""; position: absolute; left: -32px; top: 5px; width: 12px; height: 12px; background: var(--primary-red); border-radius: 50%; }
                .time-y { font-weight: bold; color: var(--primary-red); font-size: 0.9rem; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; } }
                @media (max-width: 900px) { .personnel-section, .modal-content { flex-direction: column; } .m-left { padding: 20px; } }
            `;
        document.head.appendChild(style);

        // --- CHÈN HTML FRAMEWORK ---
        app.innerHTML = `
                <div class="container">
                    <h1 class="main-title">BAN CHẤP HÀNH TRUNG ƯƠNG ĐẢNG</h1>
                    
                    <h2 class="sub-title">Tổng Bí Thư</h2>
                    <div id="top-TBT" class="leader-row"></div>

                    <h2 class="sub-title">Bộ Chính Trị</h2>
                    <div id="top-BCT" class="leader-row"></div>

                    <div class="personnel-section">
                        <aside class="sidebar">
                            <h4>Tìm kiếm nhanh</h4>
                            <input type="text" id="inputSearch" class="search-box" placeholder="Nhập tên để tìm ngay...">
                            
                            <h4>Theo chức vụ</h4>
                            <label class="check-item"><input type="checkbox" class="role-cb" value="Tổng Bí thư"> Tổng Bí thư</label>
                            <label class="check-item"><input type="checkbox" class="role-cb" value="Bộ Chính Trị"> Bộ Chính Trị</label>
                            <label class="check-item"><input type="checkbox" class="role-cb" value="Ban Bí Thư"> Ban Bí Thư</label>
                            <label class="check-item"><input type="checkbox" class="role-cb" value="Trung Ương Đảng"> Trung Ương Đảng</label>

                            <h4>Vùng miền</h4>
                            <select id="selHome" class="select-box">
                                <option value="">Tất cả quê quán</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Hưng Yên">Hưng Yên</option>
                                <option value="Thanh Hóa">Thanh Hóa</option>
                            </select>
                        </aside>
                        
                        <main class="main-content">
                            <div style="margin-bottom:15px; font-size:0.8rem">Hiển thị: <b id="count">0</b> kết quả</div>
                            <div id="grid" class="grid"></div>
                        </main>
                    </div>
                </div>

                <div id="modal" class="modal">
                    <div class="modal-content">
                        <span class="close" onclick="closeModal()">&times;</span>
                        <div id="modal-l" class="m-left"></div>
                        <div id="modal-r" class="m-right"></div>
                    </div>
                </div>
            `;

        // --- GẮN LOGIC ---
        setupListeners();
        renderTopGroups();
        filterNow(); // Khởi tạo danh sách hồ sơ
      }

      /** * 3. LOGIC XỬ LÝ DỮ LIỆU
       */
      function renderTopGroups() {
        const groups = ["TBT", "BCT"];
        groups.forEach((g) => {
          const container = document.getElementById(`top-${g}`);
          container.innerHTML = personnelData
            .filter((p) => p.group === g)
            .map(
              (p) => `
                    <div class="card" onclick="openBio(${p.id})">
                        <img src="${p.img}">
                        <h3>${p.name}</h3>
                        <p>${p.role}</p>
                    </div>
                `
            )
            .join("");
        });
      }

      function filterNow() {
        const query = document.getElementById("inputSearch").value.toLowerCase();
        const home = document.getElementById("selHome").value;
        const roles = Array.from(document.querySelectorAll(".role-cb:checked")).map((c) => c.value);

        const filtered = personnelData.filter((p) => {
          const mName = p.name.toLowerCase().includes(query);
          const mHome = !home || p.home === home;
          const mRole = roles.length === 0 || roles.some((r) => p.role.includes(r));
          return mName && mHome && mRole;
        });

        document.getElementById("count").innerText = filtered.length;
        document.getElementById("grid").innerHTML = filtered
          .map(
            (p) => `
                <div class="mini-card" onclick="openBio(${p.id})">
                    <img src="${p.img}">
                    <div>
                        <h5>${p.name}</h5>
                        <p>Quê quán: ${p.home}</p>
                        <p style="color:var(--primary-red); font-weight:bold">${p.role}</p>
                    </div>
                </div>
            `
          )
          .join("");
      }

      function setupListeners() {
        document.getElementById("inputSearch").oninput = filterNow;
        document.getElementById("selHome").onchange = filterNow;
        document.querySelectorAll(".role-cb").forEach((cb) => (cb.onchange = filterNow));
      }

      // Modal Logic
      function openBio(id) {
        const p = personnelData.find((x) => x.id === id);
        const mLeft = document.getElementById("modal-l");
        const mRight = document.getElementById("modal-r");

        mLeft.innerHTML = `<img src="${p.img}"><h2>${p.name}</h2><p>${p.role}</p>`;

        const timelineHtml = p.events
          .map(
            (ev) => `
                <div class="timeline-item">
                    <div class="time-y">${ev.y}</div>
                    <div style="font-size:0.9rem">${ev.t}</div>
                </div>
            `
          )
          .join("");

        mRight.innerHTML = `
                <h3>Thông tin chi tiết</h3>
                <p><strong>Quê quán:</strong> ${p.home}</p>
                <p><strong>Trình độ chuyên môn:</strong> ${p.edu}</p>
                <h3 style="margin-top:30px">Tóm tắt quá trình công tác</h3>
                <div class="timeline">${timelineHtml}</div>
            `;
        document.getElementById("modal").style.display = "flex";
      }

      function closeModal() {
        document.getElementById("modal").style.display = "none";
      }
      window.onclick = (e) => {
        if (e.target.id === "modal") closeModal();
      };

      // CHẠY ỨNG DỤNG
      window.onload = initApp;
