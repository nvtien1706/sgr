function WWW_click() {
    const sidePanel = document.querySelector('.side-panel');
    
    // Nếu panel đang hiển thị (translateX(0)) thì ẩn đi, ngược lại hiện lên
    if (sidePanel.style.transform === 'translateX(0)') {
      // Đưa panel ra ngoài (ẩn panel)
      sidePanel.style.transform = 'translateX(100%)';
    } else {
      // Hiện panel bằng cách đưa nó vào vị trí ban đầu (dịch khoảng 280px từ phải qua trái)
      sidePanel.style.transform = 'translateX(0)';
    }
  }

function close_panel(){
    const X_btn = document.querySelector('.close-panel-btn');
    const sidePanel = document.querySelector('.side-panel');
    if (sidePanel.style.transform === 'translateX(100%)') {
        // Đưa panel ra ngoài (ẩn panel)
        sidePanel.style.transform = 'translateX(0)';
    }
    else {
        // Hiện panel bằng cách đưa nó vào vị trí ban đầu (dịch khoảng 280px từ phải qua trái)
        sidePanel.style.transform = 'translateX(100%)';
      }
    }