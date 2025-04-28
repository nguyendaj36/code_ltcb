document.addEventListener('DOMContentLoaded', function() {
    // random id đơn hàng
    const orderId = Math.floor(10000 + Math.random() * 90000);
    document.getElementById('order-id').textContent = orderId;
    
     // xu ly chuyen doi form thanh toan
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const paymentForms = {
        'credit-card': document.getElementById('credit-card-form'),
        'bank-transfer': document.getElementById('bank-transfer-form'),
        'paypal': document.getElementById('paypal-form'),
        'momo': document.getElementById('momo-form')
    };
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Ẩn tất cả các form
            Object.values(paymentForms).forEach(form => {
                if (form) form.classList.remove('active');
            });
            
            // Hiển thị form tương ứng
            if (this.checked && paymentForms[this.value]) {
                paymentForms[this.value].classList.add('active');
            }
        });
    });
    
    // Xử lý submit form
    const paymentForm = document.getElementById('paymentForm');
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Lấy thông tin từ form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        // Kiểm tra thông tin cơ bản
        if (!name || !email || !phone || !address) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Kiểm tra thông tin thanh toán tùy phương thức
        let paymentValid = true;
        let paymentDetails = {};
        
        switch(paymentMethod) {
            case 'credit-card':
                const cardNumber = document.getElementById('card-number').value;
                const cardExpiry = document.getElementById('card-expiry').value;
                const cardCvv = document.getElementById('card-cvv').value;
                const cardName = document.getElementById('card-name').value;
                
                if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
                    paymentValid = false;
                    alert('Vui lòng điền đầy đủ thông tin thẻ!');
                } else {
                    paymentDetails = {
                        cardNumber,
                        cardExpiry,
                        cardCvv,
                        cardName
                    };
                }
                break;
                
            case 'bank-transfer':
                // Không cần kiểm tra gì thêm cho chuyển khoản
                paymentDetails = {
                    method: 'bank-transfer',
                    orderId: orderId
                };
                break;
                
            case 'paypal':
                const paypalEmail = document.getElementById('paypal-email').value;
                if (!paypalEmail) {
                    paymentValid = false;
                    alert('Vui lòng nhập email PayPal!');
                } else {
                    paymentDetails = { paypalEmail };
                }
                break;
                
            case 'momo':
                const momoPhone = document.getElementById('momo-phone').value;
                const momoName = document.getElementById('momo-name').value;
                
                if (!momoPhone || !momoName) {
                    paymentValid = false;
                    alert('Vui lòng điền đầy đủ thông tin ví Momo!');
                } else {
                    paymentDetails = {
                        momoPhone,
                        momoName
                    };
                }
                break;
            case 'COD':
                // Không cần kiểm tra gì thêm cho COD
                paymentDetails = {
                    method: 'COD'
                };
                break;
        }
        
        if (!paymentValid) return;
        
        // Hiển thị thông báo thành công
        let message = `Đặt hàng thành công!\n\nHọ tên: ${name}\nSĐT: ${phone}\nĐịa chỉ: ${address}\nPhương thức thanh toán: ${getPaymentMethodName(paymentMethod)}`;
        
        if (paymentMethod === 'bank-transfer') {
            message += `\n\nVui lòng chuyển khoản theo thông tin đã cung cấp với nội dung: "Thanh toán đơn hàng #${orderId}"`;
            message += '\nSau khi chuyển khoản, vui lòng gửi chứng từ cho chúng tôi qua email hoặc Zalo.';
        }
        
        alert(message);
        
        // Reset form (trong thực tế có thể chuyển hướng trang)
        // paymentForm.reset();
    });
    
    function getPaymentMethodName(value) {
        switch(value) {
            case 'credit-card': return 'Thẻ tín dụng/Ghi nợ';
            case 'bank-transfer': return 'Chuyển khoản ngân hàng';
            case 'paypal': return 'PayPal';
            case 'momo': return 'Ví điện tử Momo';
            default: return '';
        }
    }
});