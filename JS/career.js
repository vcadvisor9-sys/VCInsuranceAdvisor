   document.addEventListener('DOMContentLoaded', function() {
       const slider = document.querySelector('.slider');
       const slides = document.querySelectorAll('.slide');
       const dots = document.querySelectorAll('.slider-dot');
       const prevBtn = document.querySelector('.prev');
       const nextBtn = document.querySelector('.next');

       let currentSlide = 0;
       const slideCount = slides.length;
       let autoSlideInterval;

       // 更新幻灯片位置
       function updateSlide() {
           // 计算每张幻灯片的宽度百分比
           const slideWidth = 100 / slideCount;
           slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

           // 更新指示点
           dots.forEach((dot, index) => {
               dot.classList.toggle('active', index === currentSlide);
           });
       }

       // 下一张幻灯片
       function nextSlide() {
           currentSlide = (currentSlide + 1) % slideCount;
           updateSlide();
       }

       // 上一张幻灯片
       function prevSlide() {
           currentSlide = (currentSlide - 1 + slideCount) % slideCount;
           updateSlide();
       }

       // 开始自动轮播
       function startAutoSlide() {
           autoSlideInterval = setInterval(nextSlide, 5000);
       }

       // 停止自动轮播
       function stopAutoSlide() {
           clearInterval(autoSlideInterval);
       }

       // 事件监听
       nextBtn.addEventListener('click', () => {
           stopAutoSlide();
           nextSlide();
           startAutoSlide();
       });

       prevBtn.addEventListener('click', () => {
           stopAutoSlide();
           prevSlide();
           startAutoSlide();
       });

       // 点击指示点切换幻灯片
       dots.forEach(dot => {
           dot.addEventListener('click', function() {
               stopAutoSlide();
               currentSlide = parseInt(this.getAttribute('data-slide'));
               updateSlide();
               startAutoSlide();
           });
       });

       // 鼠标悬停时暂停轮播
       const sliderContainer = document.querySelector('.slider-container');
       sliderContainer.addEventListener('mouseenter', stopAutoSlide);
       sliderContainer.addEventListener('mouseleave', startAutoSlide);

       // 初始化自动轮播
       startAutoSlide();
   });


   document.addEventListener('DOMContentLoaded', function() {
       console.log("DOM loaded, initializing EmailJS...");

       // 初始化EmailJS
       try {
           emailjs.init("sSDfHigbNRB_zbWNc");
           console.log("EmailJS initialized successfully");
       } catch (error) {
           console.error("EmailJS initialization failed:", error);
           showInitializationError();
           return;
       }

       const contactForm = document.getElementById('contactForm');
       const formSuccess = document.getElementById('formSuccess');

       if (!contactForm) {
           console.error("Contact form not found!");
           return;
       }

       // 表单验证和提交
       contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
           console.log("Form submitted");

           // 重置错误状态
           clearErrors();

           // 验证字段
           let isValid = true;

           // 验证姓名
           const nameInput = document.getElementById('name');
           if (!nameInput.value.trim()) {
               showError(nameInput, 'nameError');
               isValid = false;
           }

           // 验证邮箱
           const emailInput = document.getElementById('email');
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!emailRegex.test(emailInput.value)) {
               showError(emailInput, 'emailError');
               isValid = false;
           }

           // 验证电话
           const phoneInput = document.getElementById('phone');
           const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
           if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
               showError(phoneInput, 'phoneError');
               isValid = false;
           }

           // 验证留言
           const messageInput = document.getElementById('message');
           if (!messageInput.value.trim()) {
               showError(messageInput, 'messageError');
               isValid = false;
           }

           // 如果验证通过，发送邮件
           if (isValid) {
               sendEmail();
           }
       });

       // 发送邮件函数
       function sendEmail() {
           // 获取表单数据
           const templateParams = {
               name: document.getElementById('name').value,
               email: document.getElementById('email').value,
               phone: document.getElementById('phone').value,
               subject: document.getElementById('subject').value || '无主题',
               message: document.getElementById('message').value
           };

           console.log("Sending email with data:", templateParams);

           // 显示加载状态
           const submitButton = contactForm.querySelector('.form-button');
           const originalText = submitButton.innerHTML;
           submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
           submitButton.disabled = true;

           // 使用 EmailJS 发送邮件
           emailjs.send('service_8dsw3td', 'template_kqt2jco', templateParams)
               .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);

                   // 显示成功消息
                   formSuccess.style.display = 'block';
                   contactForm.reset();

                   // 恢复按钮状态
                   submitButton.innerHTML = originalText;
                   submitButton.disabled = false;

                   // 5秒后隐藏成功消息
                   setTimeout(() => {
                       formSuccess.style.display = 'none';
                   }, 5000);
               })
               .catch(function(error) {
                   console.log('EmailJS Error:', error);

                   let errorMessageText = '发送失败，请稍后重试或直接联系我们';

                   // 检查特定的错误类型
                   if (error.status === 400) {
                       errorMessageText = '公钥错误或无效，请检查EmailJS配置';
                   } else if (error.status === 401) {
                       errorMessageText = '认证失败，请检查您的EmailJS账户设置';
                   } else if (error.text && error.text.includes("public key")) {
                       errorMessageText = '公钥配置错误: ' + error.text;
                   }

                   // 显示错误消息
                   const errorMessage = document.createElement('div');
                   errorMessage.className = 'form-error';
                   errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${errorMessageText}`;
                   errorMessage.style.display = 'block';
                   errorMessage.style.color = '#e53e3e';
                   errorMessage.style.padding = '15px';
                   errorMessage.style.marginTop = '20px';
                   errorMessage.style.backgroundColor = '#fed7d7';
                   errorMessage.style.borderRadius = '8px';
                   errorMessage.style.textAlign = 'center';

                   contactForm.appendChild(errorMessage);

                   // 恢复按钮状态
                   submitButton.innerHTML = originalText;
                   submitButton.disabled = false;

                   // 10秒后隐藏错误消息
                   setTimeout(() => {
                       errorMessage.style.display = 'none';
                   }, 10000);
               });
       }

       // 显示初始化错误
       function showInitializationError() {
           const errorMessage = document.createElement('div');
           errorMessage.className = 'form-error';
           errorMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> EmailJS初始化失败，请检查控制台获取详细信息';
           errorMessage.style.display = 'block';
           errorMessage.style.color = '#e53e3e';
           errorMessage.style.padding = '15px';
           errorMessage.style.marginTop = '20px';
           errorMessage.style.backgroundColor = '#fed7d7';
           errorMessage.style.borderRadius = '8px';
           errorMessage.style.textAlign = 'center';

           const formContainer = document.querySelector('.form-container');
           if (formContainer) {
               formContainer.appendChild(errorMessage);
           }
       }

       // 显示错误消息
       function showError(input, errorId) {
           input.classList.add('error');
           const errorElement = document.getElementById(errorId);
           if (errorElement) {
               errorElement.style.display = 'block';
           }
       }

       // 清除错误状态
       function clearErrors() {
           const errorInputs = document.querySelectorAll('.form-input.error');
           errorInputs.forEach(input => {
               input.classList.remove('error');
           });

           const errorMessages = document.querySelectorAll('.error-message');
           errorMessages.forEach(message => {
               message.style.display = 'none';
           });

           if (formSuccess) {
               formSuccess.style.display = 'none';
           }

           // 移除任何现有的错误消息
           const existingErrors = document.querySelectorAll('.form-error');
           existingErrors.forEach(error => error.remove());
       }

       // 实时验证
       const inputs = document.querySelectorAll('.form-input');
       inputs.forEach(input => {
           input.addEventListener('input', function() {
               this.classList.remove('error');
               const errorId = this.id + 'Error';
               const errorElement = document.getElementById(errorId);
               if (errorElement) {
                   errorElement.style.display = 'none';
               }
           });
       });
   });