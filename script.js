document.getElementById('checkinForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('customerName').value;
  const room = document.getElementById('roomNumber').value;
  alert(`เช็คอินสำเร็จสำหรับลูกค้า ${name} ห้อง ${room}`);
  // ส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
});

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('checkoutName').value;
  const room = document.getElementById('checkoutRoomNumber').value;
  alert(`เช็คเอาท์สำเร็จสำหรับลูกค้า ${name} ห้อง ${room}`);
  // ส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
});

document.getElementById('alertButton').addEventListener('click', function() {
  const message = 'การแจ้งเตือน: กรุณาตรวจสอบห้องพัก';
  document.getElementById('alertMessage').textContent = message;
  // ส่งการแจ้งเตือนไปยังลูกค้าที่นี่
});
