

I understand perfectly. Since the volume buttons are unreliable (due to browser security), we will bring back the visual buttons, but we will solve the "Squeezing" issue by implementing a **Smart Responsive Layout**.

**The Evolution:**
1.  **Portrait Mode (Holding phone upright):** The controls will be a sleek bar **underneath** the camera to save vertical space.
2.  **Landscape Mode (Tilting the phone to watch like a video):** When the user tilts the phone as you suggested, the controls will automatically move to the **Right Side** of the screen. This maximizes the video area naturally, exactly like a professional video editor or player app.

Here is the complete, evolved code.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Opticore ViPro | Professional Virtual Eyewear Analysis</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Face-API.js library with CDN models -->
    <script src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"></script>
</head>
<body oncontextmenu="return false;">
    <!-- Loading Screen (4.2 seconds) -->
    <div id="loadingScreen" class="loading-screen">
        <div class="loading-content">
            <div class="loading-logo">
                <div class="pulse-ring"></div>
                <i class="fas fa-eye"></i>
                <div class="corner-dots">
                    <span></span><span></span><span></span><span></span>
                </div>
            </div>
            <h1 class="loading-title">Opticore <span class="vi-pro">ViPro</span></h1>
            <p class="loading-subtitle">Powered By MortApps Studios</p>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
            <div class="loading-tagline">Initializing Visual Intelligence</div>
        </div>
    </div>

    <!-- Popup Overlays -->
    <div id="howItWorksPopup" class="popup-overlay">
        <div class="popup-content">
            <div class="popup-header">
                <h3><i class="fas fa-info-circle"></i> How It Works</h3>
                <button class="popup-close">&times;</button>
            </div>
            <div class="popup-body">
                <!-- NEW: Professional SmartMode Instructions -->
                <div class="engineer-note">
                    <i class="fas fa-microchip"></i>
                    <span><strong>PRO TIP:</strong> Activate our proprietary <span style="color: var(--accent-teal);">Neural Calibration Layer</span> by pressing <code>Ctrl + D</code> (Windows) or <code>Cmd + D</code> (Mac) to view real-time biometric tracking data.</span>
                </div>
                
                <div class="instruction-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>Camera Activation</h4>
                        <p>Click "Start Visual Analysis" to enable your camera. Access is required for real-time facial mapping.</p>
                    </div>
                </div>
                <div class="instruction-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>Frame Selection</h4>
                        <p>Choose from our curated collection of precision eyewear. Each selection updates in real-time.</p>
                    </div>
                </div>
                <div class="instruction-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Precision Adjustment</h4>
                        <div class="adjustment-instructions">
                            <div class="adjustment-item">
                                <span class="key">+</span>
                                <span>Increase frame dimensions</span>
                            </div>
                            <div class="adjustment-item">
                                <span class="key">-</span>
                                <span>Decrease frame dimensions</span>
                            </div>
                            <div class="adjustment-item">
                                <span class="key">↑/↓</span>
                                <span>Vertical positioning</span>
                            </div>
                            <div class="adjustment-item">
                                <span class="key">←/→</span>
                                <span>Horizontal positioning</span>
                            </div>
                        </div>
                        <p class="mobile-note"><i class="fas fa-mobile-alt"></i> <strong>Portrait Mode:</strong> Controls at bottom. <strong>Landscape Mode:</strong> Controls on side (Tilt phone for space).</p>
                    </div>
                </div>
                <div class="instruction-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h4>Results Delivery</h4>
                        <p>Select "Send Analysis" to securely transmit your personalized eyewear assessment.</p>
                    </div>
                </div>
            </div>
            <div class="popup-footer">
                <button class="btn-primary start-try-on-btn">
                    <i class="fas fa-play"></i> Begin Analysis
                </button>
            </div>
        </div>
    </div>

    <div id="privacyPopup" class="popup-overlay">
        <div class="popup-content">
            <div class="popup-header">
                <h3><i class="fas fa-shield-alt"></i> Privacy & Security Protocol</h3>
                <button class="popup-close">&times;</button>
            </div>
            <div class="popup-body">
                <div class="security-badge">
                    <i class="fas fa-lock"></i>
                    <span>100% Device-Local Processing</span>
                </div>
                <p class="privacy-statement">
                    The Opticore ViPro system operates under strict privacy protocols. All facial recognition, frame mapping, and visual analysis occur exclusively within your device's secure environment.
                </p>
                <div class="privacy-points">
                    <div class="privacy-point">
                        <i class="fas fa-check-circle"></i>
                        <span>Zero image transmission to external servers</span>
                    </div>
                    <div class="privacy-point">
                        <i class="fas fa-check-circle"></i>
                        <span>No facial data storage or retention</span>
                    </div>
                    <div class="privacy-point">
                        <i class="fas fa-check-circle"></i>
                        <span>Real-time processing with immediate memory clearance</span>
                    </div>
                    <div class="privacy-point">
                        <i class="fas fa-check-circle"></i>
                        <span>Military-grade local encryption protocols</span>
                    </div>
                </div>
                <p class="security-note">
                    Your visual privacy is paramount. The system is designed for healthcare and eyewear professionals who require absolute client confidentiality.
                </p>
            </div>
        </div>
    </div>

    <div id="contactPopup" class="popup-overlay">
        <div class="popup-content">
            <div class="popup-header">
                <h3><i class="fas fa-headset"></i> Professional Consultation</h3>
                <button class="popup-close">&times;</button>
            </div>
            <div class="popup-body">
                <p>Connect with our optical technology specialists:</p>
                <div class="contact-options">
                    <button class="contact-option-btn call-option">
                        <i class="fas fa-phone"></i>
                        <div>
                            <strong>Direct Call</strong>
                            <small>+254 113 400 063</small>
                        </div>
                    </button>
                    <button class="contact-option-btn whatsapp-option">
                        <i class="fab fa-whatsapp"></i>
                        <div>
                            <strong>WhatsApp Consultation</strong>
                            <small>+254 113 400 063</small>
                        </div>
                    </button>
                </div>
                <p class="contact-note">
                    <i class="fas fa-clock"></i> Available: Mon-Fri 8:00-18:00 EAT
                </p>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-eye"></i>
                <span>Opticore <strong>ViPro</strong></span>
            </div>
            <div class="nav-links">
                <a href="#" class="active">Visual Analysis</a>
                <a href="#" id="framesLink">Frames</a>
                <a href="#" id="howItWorksLink">How It Works</a>
                <a href="#" id="privacyLink">Privacy</a>
                <button class="btn-contact" id="contactLink">Consultation</button>
            </div>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Main Container -->
    <main class="container">
        <!-- Left Panel: Try-On Area -->
        <div class="try-on-container">
            <div class="section-header">
                <h1><i class="fas fa-atom"></i> Visual Analysis Studio</h1>
                <p class="subtitle">Precision eyewear fitting with advanced facial mapping technology</p>
            </div>

            <!-- Camera/Canvas Area -->
            <div class="camera-section">
                <!-- Video Feed (hidden but active) -->
                <video id="videoElement" class="video-feed" autoplay playsinline></video>
                
                <!-- Canvas where magic happens -->
                <canvas id="canvasElement" class="canvas-overlay"></canvas>
                
                <!-- Fallback Static Image -->
                <div id="staticContainer" class="static-fallback">
                    <img src="assets/static-model.jpg" alt="Reference facial structure for analysis" id="staticModel">
                    <!-- Draggable glasses will appear here in static mode -->
                    <img src="assets/glasses/frame1.png" alt="Selected eyewear frame" id="staticGlasses" class="draggable-glasses">
                </div>

                <!-- Status Overlays -->
                <div id="loadingOverlay" class="overlay">
                    <div class="loading-spinner"></div>
                    <p>Initializing Visual Intelligence <span id="loadingText">Standby</span></p>
                </div>

                <div id="permissionOverlay" class="overlay permission-prompt">
                    <i class="fas fa-camera fa-3x"></i>
                    <h3>Camera Access Required</h3>
                    <p>For precise facial mapping, camera access is necessary.</p>
                    <p class="small-text"><i class="fas fa-shield-alt"></i> 100% local processing - No data leaves your device</p>
                    <button id="startCameraBtn" class="btn-primary btn-large">
                        <i class="fas fa-play-circle"></i> Start Visual Analysis
                    </button>
                    <button id="useStaticModeBtn" class="btn-secondary">
                        <i class="fas fa-image"></i> Use Reference Image
                    </button>
                </div>

                <!-- EVOLVED: Smart Mobile Controls -->
                <div id="mobileControls" class="mobile-controls-overlay">
                    <div class="mobile-controls">
                        <button class="mobile-control-btn" data-action="zoom-in">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button class="mobile-control-btn" data-action="zoom-out">
                            <i class="fas fa-search-minus"></i>
                        </button>
                        <div class="mobile-control-separator"></div>
                        
                        <!-- RESTORED UP/DOWN BUTTONS -->
                        <button class="mobile-control-btn" data-action="move-up">
                            <i class="fas fa-arrow-up"></i>
                        </button>
                        <button class="mobile-control-btn" data-action="move-down">
                            <i class="fas fa-arrow-down"></i>
                        </button>
                        
                        <div class="mobile-control-separator"></div>
                        
                        <button class="mobile-control-btn" data-action="move-left">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <button class="mobile-control-btn" data-action="move-right">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                        
                        <div class="mobile-control-separator"></div>
                        
                        <!-- SmartMode Button -->
                        <button class="mobile-control-btn mobile-smartmode-btn" id="mobileSmartModeBtn">
                            <i class="fas fa-microchip"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Control Panel -->
            <div class="control-panel">
                <div class="controls-grid">
                    <button id="toggleCameraBtn" class="btn-control">
                        <i class="fas fa-video"></i> <span>Camera: <span id="cameraStatus">Standby</span></span>
                    </button>
                    <button id="captureBtn" class="btn-control btn-success">
                        <i class="fas fa-camera-retro"></i> Capture Analysis
                    </button>
                    <button id="downloadBtn" class="btn-control">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button id="shareBtn" class="btn-control" disabled>
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button id="resetBtn" class="btn-control">
                        <i class="fas fa-sync-alt"></i> Reset
                    </button>
                </div>

                <!-- Lighting Controls -->
                <div class="lighting-controls">
                    <h4><i class="fas fa-sun"></i> Lighting</h4>
                    <div class="lighting-options">
                        <button class="light-btn active" data-filter="none">Normal</button>
                        <button class="light-btn" data-filter="brightness(1.2) contrast(1.1)">Bright</button>
                        <button class="light-btn" data-filter="brightness(0.9) sepia(0.1)">Evening</button>
                        <button class="light-btn" data-filter="saturate(1.3)">Vibrant</button>
                    </div>
                </div>

                <!-- Adjustment Controls -->
                <div class="adjustment-controls">
                    <h4><i class="fas fa-sliders-h"></i> Frame Adjustments</h4>
                    
                    <!-- Size Controls -->
                    <div class="adjustment-section">
                        <label class="adjustment-label">Size Adjustment</label>
                        <div class="adjustment-row">
                            <button class="adjust-btn" data-adjust="size-up">
                                <i class="fas fa-plus"></i> Increase Size
                            </button>
                            <button class="adjust-btn" data-adjust="size-down">
                                <i class="fas fa-minus"></i> Decrease Size
                            </button>
                        </div>
                    </div>

                    <!-- Position Controls -->
                    <div class="adjustment-section">
                        <label class="adjustment-label">Position Adjustment</label>
                        <div class="position-controls">
                            <div class="position-row">
                                <button class="adjust-btn position-btn" data-adjust="position-up">
                                    <i class="fas fa-arrow-up"></i>
                                </button>
                            </div>
                            <div class="position-row">
                                <button class="adjust-btn position-btn" data-adjust="position-left">
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                                <button class="adjust-btn position-btn" data-adjust="position-down">
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                                <button class="adjust-btn position-btn" data-adjust="position-right">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Keyboard Hint -->
                    <div class="keyboard-hint">
                        <i class="fas fa-keyboard"></i>
                        <small>Use + / - keys for size, Arrow keys for position. Mobile: Use On-Screen Buttons.</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Panel: Frame Selection -->
        <div class="selection-panel" id="framesSection">
            <div class="panel-header">
                <h2><i class="fas fa-glasses"></i> Select Precision Frames</h2>
                <div class="frame-count">12 professional models</div>
            </div>

            <!-- Filter Tabs -->
            <div class="filter-tabs">
                <button class="filter-btn active">All Collections</button>
                <button class="filter-btn">Professional</button>
                <button class="filter-btn">Contemporary</button>
                <button class="filter-btn">Classic Design</button>
            </div>

            <!-- Glasses Grid -->
            <div class="glasses-grid" id="glassesGrid">
                <!-- Glasses cards will be generated by JavaScript -->
            </div>

            <!-- Selection Summary -->
            <div class="selection-summary">
                <h3><i class="fas fa-clipboard-check"></i> Analysis Summary</h3>
                <div id="selectedFrameDisplay" class="selected-frame">
                    <img id="selectedFrameImg" src="assets/glasses/frame1.png" alt="Selected Frame">
                    <div>
                        <h4 id="selectedFrameName">Classic Thick-Rim Rectangular</h4>
                        <p id="selectedFramePrice">Professional Grade</p>
                    </div>
                </div>
                <button id="sendToWhatsAppBtn" class="btn-primary btn-full-width">
                    <i class="fab fa-whatsapp"></i> Send Analysis for Consultation
                </button>
                <p class="privacy-note">
                    <i class="fas fa-shield-alt"></i> 
                    <strong>Secure Transmission:</strong> Analysis data is encrypted end-to-end via WhatsApp.
                </p>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4><i class="fas fa-eye"></i> Opticore ViPro</h4>
                <p>Advanced optical analysis platform for precision eyewear fitting and visual health assessment.</p>
            </div>
            <div class="footer-section">
                <h4>Capabilities</h4>
                <ul>
                    <li>Real-time facial biometric mapping</li>
                    <li>100% client-side visual processing</li>
                    <li>Professional-grade frame analysis</li>
                    <li>Secure encrypted consultation system</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>For Professionals</h4>
                <p class="professional-note">
                    Used by optical clinics, eyewear retailers, and healthcare providers for precise client consultations.
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Engineered with <span class="heartbeat"><i class="fas fa-heart"></i></span> by <a href="https://www.mortappsstudios.com" target="_blank">MortApps Studios</a></p>
            <p class="copyright">©2026 Opticore ViPro. Advanced Optical Technology.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

### CSS
```css
/* ===== RESET & BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
    background: linear-gradient(135deg, #f8fafc 0%, #e8f0f8 100%);
    min-height: 100vh;
    color: #2c3e50;
    overflow-x: hidden;
}

/* ===== LOADING SCREEN (4.2 seconds) ===== */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a2980 0%, #26d0ce 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeOut 0.5s ease 4.2s forwards;
}

.loading-content {
    text-align: center;
    color: white;
    max-width: 500px;
    padding: 2rem;
}

.loading-logo {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 2rem;
}

.loading-logo i {
    font-size: 3.5rem;
    color: white;
    position: relative;
    z-index: 2;
    animation: pulse 2s infinite;
}

.pulse-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: ripple 2s infinite;
}

.corner-dots {
    position: absolute;
    width: 100%;
    height: 100%;
}

.corner-dots span {
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: blink 1.5s infinite;
}

.corner-dots span:nth-child(1) { top: 0; left: 0; animation-delay: 0s; }
.corner-dots span:nth-child(2) { top: 0; right: 0; animation-delay: 0.2s; }
.corner-dots span:nth-child(3) { bottom: 0; left: 0; animation-delay: 0.4s; }
.corner-dots span:nth-child(4) { bottom: 0; right: 0; animation-delay: 0.6s; }

.loading-title {
    font-size: 3.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    letter-spacing: 2px;
}

.vi-pro {
    font-weight: 700;
    background: linear-gradient(45deg, #fff, #4fc3f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.loading-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    letter-spacing: 1px;
}

.loading-progress {
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin: 2rem 0;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: white;
    width: 0;
    animation: progressBar 4.2s linear forwards;
    border-radius: 3px;
}

.loading-tagline {
    font-size: 0.9rem;
    opacity: 0.8;
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
}

@keyframes progressBar {
    0% { width: 0; }
    100% { width: 100%; }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
}

@keyframes ripple {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

@keyframes fadeOut {
    to { opacity: 0; visibility: hidden; }
}

/* ===== POPUP OVERLAYS ===== */
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: 1rem;
    backdrop-filter: blur(5px);
}

.popup-content {
    background: white;
    border-radius: 20px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: popupSlide 0.3s ease;
}

@keyframes popupSlide {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e8f0f8;
    background: linear-gradient(135deg, #1a2980, #2980b9);
    color: white;
    border-radius: 20px 20px 0 0;
}

.popup-header h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
}

.popup-close {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.3s;
}

.popup-close:hover {
    background: rgba(255, 255, 255, 0.2);
}

.popup-body {
    padding: 2rem;
}

.instruction-step {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 10px;
    border-left: 4px solid #3498db;
}

.step-number {
    background: #3498db;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.step-content h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.step-content p {
    color: #5a6c7d;
    line-height: 1.6;
}

.adjustment-instructions {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #e8f0f8;
}

.adjustment-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
}

.adjustment-item .key {
    background: #3498db;
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: monospace;
}

.mobile-note {
    background: #e8f4fc;
    padding: 0.8rem;
    border-radius: 8px;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #2c65a8;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.security-badge {
    background: #e8f6f3;
    border: 2px solid #1abc9c;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #16a085;
}

.privacy-statement {
    line-height: 1.7;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 10px;
}

.privacy-points {
    margin: 1.5rem 0;
}

.privacy-point {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    color: #27ae60;
}

.privacy-point i {
    color: #27ae60;
}

.security-note {
    font-style: italic;
    color: #7f8c8d;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #e8f0f8;
    margin-top: 1.5rem;
}

.contact-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
}

.contact-option-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem;
    border: 2px solid #e8f0f8;
    border-radius: 12px;
    background: white;
    cursor: pointer;
    transition: all 0.3s;
    text-align: left;
    width: 100%;
}

.contact-option-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.call-option {
    border-color: #3498db;
}

.call-option i {
    color: #3498db;
    font-size: 1.5rem;
}

.whatsapp-option {
    border-color: #25D366;
}

.whatsapp-option i {
    color: #25D366;
    font-size: 1.5rem;
}

.contact-note {
    text-align: center;
    color: #7f8c8d;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.popup-footer {
    padding: 1.5rem;
    border-top: 1px solid #e8f0f8;
    text-align: center;
}

.start-try-on-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
}

/* ===== NAVBAR ===== */
.navbar {
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
}

.nav-container {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.8rem;
    font-weight: 600;
    color: #1a2980;
}

.logo i {
    color: #26d0ce;
    font-size: 2rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    transition: all 0.3s;
    position: relative;
}

.nav-links a:hover {
    color: #1a2980;
    background: #f0f8ff;
}

.nav-links a.active {
    background: linear-gradient(135deg, #1a2980, #2980b9);
    color: white;
    box-shadow: 0 4px 12px rgba(26, 41, 128, 0.2);
}

.nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: #26d0ce;
    border-radius: 3px;
}

.btn-contact {
    background: linear-gradient(135deg, #26d0ce, #1a9896);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-contact:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(38, 208, 206, 0.3);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #2c3e50;
    cursor: pointer;
}

/* ===== MAIN CONTAINER ===== */
.container {
    max-width: 1600px;
    margin: 2rem auto;
    padding: 0 2rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.try-on-container {
    flex: 3;
    min-width: 300px;
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.selection-panel {
    flex: 1.5;
    min-width: 300px;
    background: white;
    border-radius: 24px;
    padding: 2.5rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

/* ===== SECTION HEADER ===== */
.section-header {
    margin-bottom: 2.5rem;
    text-align: center;
}

.section-header h1 {
    color: #1a2980;
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-weight: 600;
}

.section-header .subtitle {
    color: #5a6c7d;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ===== CAMERA SECTION ===== */
.camera-section {
    position: relative;
    width: 100%;
    height: 520px; /* Default Desktop Height */
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(45deg, #1a2980, #26d0ce);
    margin-bottom: 2rem;
    border: 2px solid #e8f0f8;
}

.video-feed, .canvas-overlay, .static-fallback {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.static-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a2980;
}

#staticModel {
    max-width: 85%;
    max-height: 85%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.draggable-glasses {
    position: absolute;
    width: 220px;
    cursor: grab;
    user-select: none;
    transition: transform 0.2s;
    z-index: 10;
}

.draggable-glasses:active {
    cursor: grabbing;
}

/* ===== MOBILE CONTROLS ===== */
.mobile-controls-overlay {
    position: absolute;
    z-index: 20;
    display: none; /* Hidden on Desktop */
}

.mobile-controls {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 0.8rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.mobile-control-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: none;
    background: white;
    color: #1a2980;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-control-btn:active {
    transform: scale(0.95);
    background: #f0f8ff;
}

.mobile-smartmode-btn {
    background: #1a2980;
    color: white;
}

.mobile-smartmode-btn.active {
    background: #26d0ce;
    box-shadow: 0 0 10px #26d0ce;
}

.mobile-control-separator {
    height: 1px;
    background: #e8f0f8;
    margin: 0.2rem 0;
}

/* ===== OVERLAYS ===== */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.98);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(5px);
}

.permission-prompt {
    text-align: center;
    padding: 3rem;
}

.permission-prompt i {
    color: #1a2980;
    margin-bottom: 1.5rem;
}

.permission-prompt h3 {
    color: #1a2980;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.permission-prompt p {
    color: #5a6c7d;
    margin-bottom: 1.5rem;
    max-width: 400px;
    line-height: 1.6;
}

.small-text {
    font-size: 0.9rem;
    color: #7f8c8d !important;
}

.loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1a2980;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
    margin-bottom: 1.5rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ===== BUTTONS ===== */
.btn-primary, .btn-secondary, .btn-control {
    border: none;
    padding: 0.9rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, #1a2980, #2980b9);
    color: white;
    border: none;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(26, 41, 128, 0.25);
}

.btn-large {
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
}

.btn-secondary {
    background: #f8fafc;
    color: #1a2980;
    border: 2px solid #e8f0f8;
}

.btn-secondary:hover {
    background: #e8f0f8;
    border-color: #1a2980;
}

.btn-control {
    background: white;
    border: 2px solid #e8f0f8;
    color: #2c3e50;
}

.btn-control:hover {
    border-color: #1a2980;
    color: #1a2980;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-success {
    background: linear-gradient(135deg, #27ae60, #219653);
    color: white;
    border: none;
}

.btn-success:hover {
    background: linear-gradient(135deg, #219653, #1e8749);
}

.btn-full-width {
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.2rem;
    font-size: 1.1rem;
}

/* ===== CONTROL PANEL ===== */
.control-panel {
    background: #f8fafc;
    border-radius: 18px;
    padding: 2rem;
    margin-top: 2rem;
    border: 1px solid #e8f0f8;
}

.controls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.2rem;
    margin-bottom: 2rem;
}

/* ===== LIGHTING CONTROLS ===== */
.lighting-controls {
    border-top: 2px solid #e8f0f8;
    padding-top: 2rem;
    margin-bottom: 2rem;
}

.lighting-controls h4 {
    margin-bottom: 1.2rem;
    color: #1a2980;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
}

.lighting-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.light-btn {
    padding: 0.8rem 1.2rem;
    background: white;
    border: 2px solid #e8f0f8;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.light-btn:hover, .light-btn.active {
    border-color: #1a2980;
    background: #1a2980;
    color: white;
    transform: translateY(-2px);
}

/* ===== ADJUSTMENT CONTROLS ===== */
.adjustment-controls {
    border-top: 2px solid #e8f0f8;
    padding-top: 2rem;
}

.adjustment-controls h4 {
    margin-bottom: 1.2rem;
    color: #1a2980;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
}

.adjustment-section {
    margin-bottom: 1.5rem;
}

.adjustment-section:last-child {
    margin-bottom: 0;
}

.adjustment-label {
    display: block;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.adjustment-row {
    display: flex;
    gap: 0.8rem;
}

.position-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 0.5rem;
}

.position-row {
    display: flex;
    gap: 5px;
    justify-content: center;
}

.position-btn {
    width: 55px;
    height: 55px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 2px solid #d5dbdb;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.position-btn i {
    font-size: 1.3rem;
    color: #1a2980;
}

.position-btn:hover {
    border-color: #1a2980;
    background: #e8f0f8;
    transform: scale(1.05);
}

.position-btn:active {
    transform: scale(0.95);
    background: #1a2980;
}

.position-btn:active i {
    color: white;
}

.adjust-btn {
    flex: 1;
    padding: 0.8rem 1.2rem;
    background: white;
    border: 2px solid #d5dbdb;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #2c3e50;
}

.adjust-btn:hover {
    border-color: #1a2980;
    background: #e8f0f8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 41, 128, 0.15);
}

.adjust-btn:active {
    transform: translateY(0);
    background: #1a2980;
    color: white;
}

.adjust-btn i {
    font-size: 1rem;
}

.keyboard-hint {
    background: #e8f0f8;
    padding: 0.8rem;
    border-radius: 8px;
    text-align: center;
    margin-top: 1rem;
    border-left: 4px solid #1a2980;
}

.keyboard-hint i {
    color: #1a2980;
    margin-right: 5px;
}

.keyboard-hint small {
    color: #5a6c7d;
    font-size: 0.85rem;
}

/* ===== GLASSES SELECTION ===== */
.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.panel-header h2 {
    color: #1a2980;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.8rem;
}

.frame-count {
    background: linear-gradient(135deg, #e8f4fc, #d4e6f9);
    color: #1a2980;
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid #c5dcf7;
}

.filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 2rem;
}

.filter-btn {
    padding: 0.7rem 1.5rem;
    background: #f8fafc;
    border: 2px solid #e8f0f8;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 500;
    color: #5a6c7d;
}

.filter-btn:hover, .filter-btn.active {
    background: linear-gradient(135deg, #1a2980, #2980b9);
    color: white;
    border-color: #1a2980;
    transform: translateY(-2px);
}

.glasses-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-bottom: 2.5rem;
    max-height: 450px;
    overflow-y: auto;
    padding-right: 10px;
    scrollbar-width: thin;
    scrollbar-color: #c5dcf7 transparent;
}

.glasses-grid::-webkit-scrollbar {
    width: 6px;
}

.glasses-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.glasses-grid::-webkit-scrollbar-thumb {
    background: #c5dcf7;
    border-radius: 10px;
}

.glasses-card {
    background: white;
    border: 2px solid #e8f0f8;
    border-radius: 14px;
    padding: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.glasses-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #1a2980;
}

.glasses-card img {
    width: 100%;
    height: 120px;
    object-fit: contain;
    margin-bottom: 1rem;
    transition: transform 0.3s;
}

.glasses-card:hover img {
    transform: scale(1.05);
}

.glasses-card h4 {
    font-size: 0.95rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    text-align: center;
    line-height: 1.4;
}

.glasses-card p {
    color: #1a2980;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: auto;
}

.card-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: bold;
}

/* ===== SELECTION SUMMARY ===== */
.selection-summary {
    background: #f8fafc;
    border-radius: 18px;
    padding: 2rem;
    margin-top: 2.5rem;
    border: 1px solid #e8f0f8;
}

.selected-frame {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: white;
    padding: 1.5rem;
    border-radius: 14px;
    margin: 1.5rem 0;
    border: 2px solid #e8f0f8;
}

.selected-frame img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 10px;
    background: white;
    padding: 0.5rem;
    border: 1px solid #e8f0f8;
}

.selected-frame div {
    flex: 1;
}

.selected-frame h4 {
    color: #1a2980;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.selected-frame p {
    color: #5a6c7d;
    font-weight: 500;
    font-size: 0.95rem;
}

.privacy-note {
    background: #e8f6f3;
    border-left: 4px solid #1abc9c;
    padding: 1.2rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #16a085;
    line-height: 1.6;
}

/* ===== FOOTER ===== */
.footer {
    background: linear-gradient(135deg, #1a2980, #1a237e);
    color: white;
    margin-top: 4rem;
    padding: 4rem 2rem 2rem;
}

.footer-content {
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section h4 {
    margin-bottom: 1.5rem;
    color: #e3f2fd;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.3rem;
    font-weight: 500;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
    color: #bbdefb;
    padding-left: 1.5rem;
    position: relative;
}

.footer-section ul li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #26d0ce;
}

.professional-note {
    color: #bbdefb;
    line-height: 1.7;
    font-style: italic;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border-left: 3px solid #26d0ce;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #90caf9;
    max-width: 1600px;
    margin: 0 auto;
}

.heartbeat {
    display: inline-block;
    animation: heartbeat 1.2s infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
    75% { transform: scale(1.05); }
}

.footer-bottom a {
    color: #4fc3f7;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.footer-bottom a:hover {
    color: #26d0ce;
    text-decoration: underline;
}

.copyright {
    margin-top: 1rem;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* ===== RESPONSIVE DESIGN & SMART LAYOUT EVOLUTION ===== */

/* Mobile Base (Portrait Mode - Holding phone upright) */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 0 0 20px 20px;
        z-index: 1000;
    }
    
    .nav-links.show {
        display: flex;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .try-on-container,
    .selection-panel {
        padding: 1.5rem;
        border-radius: 20px;
    }
    
    .controls-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* PORTRAIT MODE: Controls at BOTTOM */
    .camera-section {
        height: 55vh; /* Dynamic height for portrait */
        margin-bottom: 60px; /* Extra space for bottom controls */
    }
    
    .mobile-controls-overlay {
        display: block;
        bottom: 10px; /* Bottom alignment */
        right: 50%; /* Center horizontally */
        left: 50%;
        transform: translateX(-50%); /* Center alignment fix */
        width: 95%; /* Wide bar */
        height: auto;
    }
    
    .mobile-controls {
        flex-direction: row; /* Horizontal row */
        justify-content: space-around;
    }
    
    .mobile-control-separator {
        width: 1px;
        height: 30px;
        margin: 0 0.2rem;
    }
    
    .glasses-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    
    .lighting-options {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .adjustment-row {
        flex-direction: column;
    }
    
    .adjust-btn {
        width: 100%;
    }
    
    .loading-title {
        font-size: 2.5rem;
    }
}

/* LANDSCAPE MODE: Tilt Phone (Like watching a video) */
@media (max-width: 992px) and (orientation: landscape) {
    
    .camera-section {
        height: 80vh; /* Use full height in landscape */
        margin-bottom: 2rem;
    }
    
    /* LANDSCAPE MODE: Controls move to the RIGHT SIDE */
    .mobile-controls-overlay {
        top: 50%;
        bottom: auto; /* Reset bottom */
        left: auto; /* Reset left centering */
        right: 10px; /* Dock to right side */
        transform: translateY(-50%); /* Center vertically */
        width: auto; /* Allow height */
        height: auto;
    }
    
    .mobile-controls {
        flex-direction: column; /* Vertical stack */
    }
    
    .mobile-control-separator {
        width: 30px;
        height: 1px;
        margin: 0.2rem 0;
    }
}

/* Small Phones */
@media (max-width: 480px) {
    .camera-section {
        height: 50vh; /* Slightly smaller for very small screens in portrait */
    }
    
    .glasses-grid {
        grid-template-columns: 1fr;
    }
    
    .controls-grid {
        grid-template-columns: 1fr;
    }
    
    .section-header h1 {
        font-size: 2rem;
        flex-direction: column;
        gap: 10px;
    }
    
    .filter-tabs {
        overflow-x: auto;
        flex-wrap: nowrap;
        padding-bottom: 0.5rem;
    }
    
    .filter-tabs::-webkit-scrollbar {
        height: 4px;
    }
    
    .popup-content {
        margin: 1rem;
        max-height: 85vh;
    }
    
    .instruction-step {
        flex-direction: column;
        gap: 1rem;
    }
    
    .step-number {
        align-self: flex-start;
    }
    
    .position-btn {
        width: 50px;
        height: 50px;
    }
    
    .position-btn i {
        font-size: 1.2rem;
    }
    
    .keyboard-hint {
        font-size: 0.8rem;
    }
}

/* Animation for button press */
@keyframes buttonPress {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
}

.adjust-btn:active,
.position-btn:active {
    animation: buttonPress 0.2s ease;
}

/* Disabled state */
.adjust-btn:disabled,
.position-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

/* Success state (when adjustment is applied) */
.adjust-btn.success {
    background: #2ecc71;
    color: white;
    border-color: #27ae60;
}

/* Focus states for accessibility */
.adjust-btn:focus,
.position-btn:focus {
    outline: 2px solid #1a2980;
    outline-offset: 2px;
}

/* Hover effect on parent section */
.adjustment-section:hover .adjustment-label {
    color: #1a2980;
}
```

### JavaScript
```javascript
// ============================================
// OPTICORE VIPRO - AESTHETIC & SECURE VERSION
// ✅ Cool SmartMode Visuals (Blue Mesh, Green Box, Red L/R)
// ✅ Professional "How-To" Text
// ✅ Code Protection (Anti-Inspect)
// ✅ Mobile Responsive with Smart Orientation Layout
// ✅ Added Navigation Functions (Frames, How It Works, Privacy)
// ✅ FIXED: SmartMode L/R labeling from user's perspective
// ✅ EVOLVED: Portrait/Landscape Layout Switching
// ============================================

// State Management
let state = {
    isCameraActive: false,
    selectedGlasses: {
        id: 1,
        name: "Classic Thick-Rim Rectangular",
        price: "Professional Grade",
        image: "frame1.png",
        style: "classic",
        scale: 0.8,
        verticalAdjust: 0.25
    },
    isStaticMode: false,
    faceDetectionActive: false,
    currentFilter: "none",
    modelsLoaded: false,
    smartMode: false,
    glassesScale: 1.0,
    verticalOffset: 0.0,
    horizontalOffset: 0.0,
    glassesX: 50,
    glassesY: 40,
    lastCapturedImage: null,
    lastDetection: null
};

// Glasses Catalog
const glassesCatalog = [
    { id: 1, name: "Classic Thick-Rim", price: "Professional Grade", image: "frame1.png", category: ["professional", "classic"], badge: "Premium", scale: 0.8, style: "classic", verticalAdjust: 0.25 },
    { id: 2, name: "Wide Rectangular", price: "Professional Grade", image: "frame2.png", category: ["professional", "contemporary"], scale: 0.8, style: "modern", verticalAdjust: 0.27 },
    { id: 3, name: "Thin Metal", price: "Professional Grade", image: "frame3.png", category: ["professional", "contemporary"], badge: "Trending", scale: 0.75, style: "designer", verticalAdjust: 0.26 },
    { id: 4, name: "Gold Metal", price: "Professional Grade", image: "frame4.png", category: ["professional", "classic"], scale: 0.78, style: "vintage", verticalAdjust: 0.28 },
    { id: 5, name: "Aviator", price: "Professional Grade", image: "frame5.png", category: ["professional", "contemporary"], scale: 0.85, style: "aviator", verticalAdjust: 0.30 },
    { id: 6, name: "Modern Square", price: "Professional Grade", image: "frame6.png", category: ["professional", "contemporary"], scale: 0.82, style: "cateye", verticalAdjust: 0.24 },
    { id: 7, name: "Soft Square", price: "Professional Grade", image: "frame7.png", category: ["professional", "classic"], scale: 0.77, style: "round", verticalAdjust: 0.26 },
    { id: 8, name: "Oversized Square", price: "Professional Grade", image: "frame8.png", category: ["professional", "classic"], badge: "Popular", scale: 0.9, style: "oversized", verticalAdjust: 0.32 },
    { id: 9, name: "Slim Oval", price: "Professional Grade", image: "frame9.png", category: ["professional", "contemporary"], scale: 0.76, style: "rectangle", verticalAdjust: 0.25 },
    { id: 10, name: "Bold Square", price: "Professional Grade", image: "frame10.png", category: ["professional", "contemporary"], scale: 0.88, style: "oversized", verticalAdjust: 0.29 },
    { id: 11, name: "Round Metal", price: "Professional Grade", image: "frame11.png", category: ["professional", "contemporary"], badge: "Premium", scale: 0.74, style: "rimless", verticalAdjust: 0.26 },
    { id: 12, name: "Compact Rectangular", price: "Professional Grade", image: "frame12.png", category: ["professional", "contemporary"], scale: 0.8, style: "geometric", verticalAdjust: 0.27 }
];

// DOM Elements
const videoElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvasElement');
const staticContainer = document.getElementById('staticContainer');
const staticGlasses = document.getElementById('staticGlasses');
const loadingOverlay = document.getElementById('loadingOverlay');
const permissionOverlay = document.getElementById('permissionOverlay');
const startCameraBtn = document.getElementById('startCameraBtn');
const useStaticModeBtn = document.getElementById('useStaticModeBtn');
const toggleCameraBtn = document.getElementById('toggleCameraBtn');
const cameraStatus = document.getElementById('cameraStatus');
const captureBtn = document.getElementById('captureBtn');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const resetBtn = document.getElementById('resetBtn');
const glassesGrid = document.getElementById('glassesGrid');
const selectedFrameImg = document.getElementById('selectedFrameImg');
const selectedFrameName = document.getElementById('selectedFrameName');
const selectedFramePrice = document.getElementById('selectedFramePrice');
const loadingText = document.getElementById('loadingText');
const sendToWhatsAppBtn = document.getElementById('sendToWhatsAppBtn');

// Navigation Elements
const framesLink = document.getElementById('framesLink');
const howItWorksLink = document.getElementById('howItWorksLink');
const privacyLink = document.getElementById('privacyLink');
const contactLink = document.getElementById('contactLink');

// Popup Elements
const howItWorksPopup = document.getElementById('howItWorksPopup');
const privacyPopup = document.getElementById('privacyPopup');
const contactPopup = document.getElementById('contactPopup');

// Mobile SmartMode Button
const mobileSmartModeBtn = document.getElementById('mobileSmartModeBtn');

// Image Cache
const imageCache = new Map();

// ===== CODE PROTECTION (ANTI-INSPECT) =====
function enableCodeProtection() {
    // Disable Right Click
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showNotification('🔒 System Protected: Source Code Access Restricted', 'warning');
    });

    // Disable F12 (Developer Tools) - Optional, adds extra security
    document.addEventListener('keydown', (e) => {
        // F12 or Ctrl+Shift+I
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            showNotification('🔒 Developer Tools Disabled in Production Mode', 'warning');
        }
    });
}

// ===== POPUP MANAGEMENT =====
function showPopup(popupElement) {
    // Hide all popups first
    document.querySelectorAll('.popup-overlay').forEach(popup => {
        popup.style.display = 'none';
    });
    
    // Show to requested popup
    popupElement.style.display = 'flex';
    
    // Add click outside to close
    setTimeout(() => {
        popupElement.addEventListener('click', function(e) {
            if (e.target === this) {
                hidePopup(popupElement);
            }
        });
    }, 100);
}

function hidePopup(popupElement) {
    popupElement.style.display = 'none';
}

function setupPopupCloseButtons() {
    document.querySelectorAll('.popup-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const popup = this.closest('.popup-overlay');
            hidePopup(popup);
        });
    });
}

// ===== NAVIGATION FUNCTIONS =====
function setupNavigation() {
    // Frames Link - Scroll to frames section
    framesLink.addEventListener('click', function(e) {
        e.preventDefault();
        const framesSection = document.getElementById('framesSection');
        if (framesSection) {
            framesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            // Update active nav link
            updateActiveNavLink('frames');
        }
    });

    // How It Works Link - Show popup
    howItWorksLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(howItWorksPopup);
        updateActiveNavLink('howItWorks');
    });

    // Privacy Link - Show popup
    privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(privacyPopup);
        updateActiveNavLink('privacy');
    });

    // Contact Link - Show popup
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPopup(contactPopup);
    });
}

function updateActiveNavLink(activeLink) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    switch(activeLink) {
        case 'frames':
            framesLink.classList.add('active');
            break;
        case 'howItWorks':
            howItWorksLink.classList.add('active');
            break;
        case 'privacy':
            privacyLink.classList.add('active');
            break;
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("🔬 Opticore ViPro - Secure & Aesthetic Version");
    
    // 1. Enable Protection
    enableCodeProtection();
    
    // 2. Setup popups
    setupPopupCloseButtons();
    
    // 3. Setup navigation
    setupNavigation();
    
    // 4. Start application after loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        initApplication();
    }, 4200);
});

function initApplication() {
    renderGlassesGrid();
    setupEventListeners();
    showPermissionOverlay();
    loadFaceModels();
    shareBtn.disabled = false;
    
    // Check if mobile to show controls overlay
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('mobileControls').style.display = 'block';
    }
}

// ===== FACE MODEL LOADING =====
async function loadFaceModels() {
    loadingText.textContent = 'Loading visual intelligence...';
    loadingOverlay.style.display = 'flex';
    
    try {
        const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights';
        
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL);
        
        state.modelsLoaded = true;
        loadingText.textContent = 'Systems ready';
        
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 1000);
        
    } catch (error) {
        console.error('Model loading error:', error);
        loadingText.textContent = 'Basic mode activated';
        state.modelsLoaded = false;
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 2000);
    }
}

// ===== RENDER GLASSES GRID =====
function renderGlassesGrid() {
    glassesGrid.innerHTML = '';
    
    glassesCatalog.forEach(glasses => {
        const card = document.createElement('div');
        card.className = 'glasses-card';
        card.dataset.id = glasses.id;
        
        let badgeHTML = '';
        if (glasses.badge) {
            badgeHTML = `<div class="card-badge">${glasses.badge}</div>`;
        }
        
        card.innerHTML = `
            <img src="assets/glasses/${glasses.image}" alt="${glasses.name}">
            <h4>${glasses.name}</h4>
            <p>${glasses.price}</p>
            ${badgeHTML}
        `;
        
        card.addEventListener('click', () => selectGlasses(glasses));
        glassesGrid.appendChild(card);
        
        preloadImage(`assets/glasses/${glasses.image}`, glasses.id);
    });
    
    selectGlasses(glassesCatalog[0]);
}

// ===== PRELOAD IMAGE =====
function preloadImage(src, id) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
        imageCache.set(id, img);
        console.log(`✅ Loaded: ${src}`);
    };
    img.onerror = function() {
        console.error(`❌ Failed: ${src}`);
    };
    img.src = src;
}

// ===== SELECT GLASSES =====
function selectGlasses(glasses) {
    state.selectedGlasses = glasses;
    state.glassesScale = 1.0;
    state.verticalOffset = 0;
    state.horizontalOffset = 0;
    
    // Update UI
    const cachedImg = imageCache.get(glasses.id);
    if (cachedImg) {
        selectedFrameImg.src = cachedImg.src;
    } else {
        selectedFrameImg.src = `assets/glasses/${glasses.image}`;
    }
    
    selectedFrameName.textContent = glasses.name;
    selectedFramePrice.textContent = glasses.price;
    
    if (state.isStaticMode) {
        if (cachedImg) {
            staticGlasses.src = cachedImg.src;
        } else {
            staticGlasses.src = `assets/glasses/${glasses.image}`;
        }
        staticGlasses.style.width = `${200 * state.glassesScale}px`;
    }
    
    // Highlight Card
    document.querySelectorAll('.glasses-card').forEach(card => {
        if (card.dataset.id == glasses.id) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    startCameraBtn.addEventListener('click', startCamera);
    useStaticModeBtn.addEventListener('click', activateStaticMode);
    toggleCameraBtn.addEventListener('click', toggleCamera);
    
    captureBtn.addEventListener('click', () => capturePhoto('open'));
    downloadBtn.addEventListener('click', () => capturePhoto('download'));
    shareBtn.addEventListener('click', () => capturePhoto('share'));
    resetBtn.addEventListener('click', resetApp);
    
    document.querySelectorAll('.adjust-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.adjust;
            handleAdjustment(action);
        });
    });
    
    document.querySelectorAll('.mobile-control-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            handleMobileControl(action);
        });
    });
    
    // Mobile SmartMode Toggle
    if (mobileSmartModeBtn) {
        mobileSmartModeBtn.addEventListener('click', () => {
            state.smartMode = !state.smartMode;
            
            // Visual feedback for mobile button
            if (state.smartMode) {
                mobileSmartModeBtn.classList.add('active');
            } else {
                mobileSmartModeBtn.classList.remove('active');
            }

            showNotification(
                `Neural Calibration Layer ${state.smartMode ? 'ENABLED' : 'DISABLED'}`, 
                state.smartMode ? 'success' : 'info'
            );
        });
    }
    
    document.querySelectorAll('.light-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.light-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            applyCanvasFilter(filter);
        });
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterGlasses(this.textContent.toLowerCase());
        });
    });
    
    sendToWhatsAppBtn.addEventListener('click', sendToWhatsAppDirect);
    
    // Setup How It Works popup start button
    document.querySelector('.start-try-on-btn').addEventListener('click', function() {
        hidePopup(howItWorksPopup);
        startCamera();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        // SmartMode Toggle (Desktop)
        if (e.ctrlKey && e.key === 'd') {
            state.smartMode = !state.smartMode;
            showNotification(
                `Neural Calibration Layer ${state.smartMode ? 'ENABLED' : 'DISABLED'}`, 
                state.smartMode ? 'success' : 'info'
            );
            e.preventDefault();
            return;
        }
        
        switch(e.key) {
            case '+': case '=':
                state.glassesScale = Math.min(2.0, state.glassesScale + 0.1);
                if (state.isStaticMode) staticGlasses.style.width = `${200 * state.glassesScale}px`;
                e.preventDefault(); break;
            case '-': case '_':
                state.glassesScale = Math.max(0.5, state.glassesScale - 0.1);
                if (state.isStaticMode) staticGlasses.style.width = `${200 * state.glassesScale}px`;
                e.preventDefault(); break;
            case 'ArrowUp':
                handleAdjustment('position-up'); e.preventDefault(); break;
            case 'ArrowDown':
                handleAdjustment('position-down'); e.preventDefault(); break;
            case 'ArrowLeft':
                handleAdjustment('position-left'); e.preventDefault(); break;
            case 'ArrowRight':
                handleAdjustment('position-right'); e.preventDefault(); break;
        }
    });
}

// ===== CAMERA FUNCTIONS =====
async function startCamera() {
    try {
        loadingOverlay.style.display = 'flex';
        loadingText.textContent = 'Requesting camera access...';
        
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: { ideal: 640 },
                height: { ideal: 480 },
                facingMode: 'user'
            },
            audio: false
        });
        
        videoElement.srcObject = stream;
        videoElement.style.display = 'block';
        canvasElement.style.display = 'block';
        staticContainer.style.display = 'none';
        
        videoElement.onloadedmetadata = async () => {
            canvasElement.width = videoElement.videoWidth;
            canvasElement.height = videoElement.videoHeight;
            
            state.isCameraActive = true;
            state.isStaticMode = false;
            cameraStatus.textContent = 'On';
            toggleCameraBtn.innerHTML = '<i class="fas fa-video"></i> Camera: On';
            
            loadingOverlay.style.display = 'none';
            permissionOverlay.style.display = 'none';
            
            if (state.modelsLoaded) {
                startFaceDetection();
            } else {
                drawBasicVideo();
            }
        };
        
    } catch (error) {
        console.error('Camera error:', error);
        loadingOverlay.style.display = 'none';
        showNotification('Camera access denied. Using static mode.', 'warning');
        activateStaticMode();
    }
}

// ===== FACE DETECTION FUNCTIONS =====
async function startFaceDetection() {
    if (!state.isCameraActive || state.isStaticMode) return;
    
    state.faceDetectionActive = true;
    
    const displaySize = { 
        width: videoElement.videoWidth, 
        height: videoElement.videoHeight 
    };
    faceapi.matchDimensions(canvasElement, displaySize);
    
    detectFaces();
}

async function detectFaces() {
    if (!state.faceDetectionActive || !state.isCameraActive) return;
    
    try {
        const detections = await faceapi
            .detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions({
                inputSize: 416,
                scoreThreshold: 0.5
            }))
            .withFaceLandmarks(true);
        
        const ctx = canvasElement.getContext('2d');
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        
        ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        
        if (detections.length > 0) {
            const detection = detections[0];
            state.lastDetection = detection;
            
            // Cool SmartMode Visualization
            if (state.smartMode) {
                drawCoolSmartMode(ctx, detection);
            }
            
            const landmarks = detection.landmarks;
            const leftEye = landmarks.getLeftEye();
            const rightEye = landmarks.getRightEye();
            
            const leftEyeCenter = getCenterPoint(leftEye);
            const rightEyeCenter = getCenterPoint(rightEye);
            
            const centerX = (leftEyeCenter.x + rightEyeCenter.x) / 2;
            const centerY = (leftEyeCenter.y + rightEyeCenter.y) / 2;
            
            const eyeDistance = Math.sqrt(
                Math.pow(rightEyeCenter.x - leftEyeCenter.x, 2) + 
                Math.pow(rightEyeCenter.y - leftEyeCenter.y, 2)
            );
            
            const baseWidth = eyeDistance * 2.4;
            const frameScale = state.selectedGlasses.scale || 0.8;
            const userScale = state.glassesScale;
            
            drawGlassesOnCanvas(ctx, centerX, centerY, eyeDistance, baseWidth, frameScale, userScale);
            
        } else {
            state.lastDetection = null;
            drawCenteredGlasses(ctx);
        }
        
        requestAnimationFrame(detectFaces);
        
    } catch (error) {
        console.error('Detection error:', error);
        setTimeout(detectFaces, 100);
    }
}

// ===== COOL SMARTMODE VISUALS =====
function drawCoolSmartMode(ctx, detection) {
    ctx.save();
    
    const landmarks = detection.landmarks;
    const box = detection.detection.box;
    const positions = landmarks.positions;
    
    // 1. GREEN BOX (Whole Face)
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 3;
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.shadowBlur = 0; // Reset shadow
    
    // 2. BLUE MESH (Inner Face) - Connecting all 68 points
    ctx.strokeStyle = '#00ffff'; // Cyan/Blue
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    
    // Simple connect logic for all points to create a "Net" look
    // Connecting points sequentially
    for (let i = 0; i < positions.length - 1; i++) {
        ctx.moveTo(positions[i].x, positions[i].y);
        ctx.lineTo(positions[i+1].x, positions[i+1].y);
    }
    // Close loop
    ctx.moveTo(positions[positions.length-1].x, positions[positions.length-1].y);
    ctx.lineTo(positions[0].x, positions[0].y);
    
    ctx.stroke();
    ctx.globalAlpha = 1.0;
    
    // 3. DOTS ON FEATURES (Nose, Mouth, Jaw)
    ctx.fillStyle = '#ff00ff'; // Magenta dots
    const features = [
        30, // Nose tip
        48, 54, // Mouth corners
        0, 16 // Jaw corners
    ];
    
    features.forEach(idx => {
        ctx.beginPath();
        ctx.arc(positions[idx].x, positions[idx].y, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // 4. RED TRACKERS (L and R Eyes) - FIXED: Now from person's perspective
    const leftEye = landmarks.getLeftEye();  // Person's left eye (right side in image)
    const rightEye = landmarks.getRightEye(); // Person's right eye (left side in image)
    const leftEyeCenter = getCenterPoint(leftEye);
    const rightEyeCenter = getCenterPoint(rightEye);
    
    const eyes = [
        { p: leftEyeCenter, label: 'R' },  // Person's left eye is on the RIGHT side of image
        { p: rightEyeCenter, label: 'L' }  // Person's right eye is on the LEFT side of image
    ];
    
    ctx.font = 'bold 16px "Segoe UI"';
    eyes.forEach(eye => {
        // Red Background Circle
        ctx.beginPath();
        ctx.arc(eye.p.x, eye.p.y, 8, 0, 2 * Math.PI);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
        
        // White Outline (Mobile Friendly)
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Text
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(eye.label, eye.p.x, eye.p.y + 1);
    });
    
    // 5. GREEN TRACKER (Center)
    const centerX = (leftEyeCenter.x + rightEyeCenter.x) / 2;
    const centerY = (leftEyeCenter.y + rightEyeCenter.y) / 2;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#00ff00';
    ctx.fill();
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px "Segoe UI"';
    ctx.fillText('C', centerX, centerY + 1);
    
    ctx.restore();
}

function getCenterPoint(points) {
    let sumX = 0, sumY = 0;
    points.forEach(point => {
        sumX += point.x;
        sumY += point.y;
    });
    return { 
        x: sumX / points.length, 
        y: sumY / points.length 
    };
}

function drawGlassesOnCanvas(ctx, centerX, centerY, eyeDistance, baseWidth, frameScale, userScale) {
    const glassesImg = imageCache.get(state.selectedGlasses.id);
    if (!glassesImg || !glassesImg.complete) {
        return; // Will retry next frame if not ready
    }
    
    const aspectRatio = glassesImg.width / glassesImg.height;
    const glassesWidth = baseWidth * frameScale * userScale;
    const glassesHeight = glassesWidth / aspectRatio;
    
    const verticalAdjust = (state.selectedGlasses.verticalAdjust || 0.25) * eyeDistance;
    const userVerticalOffset = state.verticalOffset * eyeDistance;
    const userHorizontalOffset = state.horizontalOffset * eyeDistance;
    
    const finalX = centerX + userHorizontalOffset;
    const finalY = centerY + verticalAdjust + userVerticalOffset;
    
    ctx.save();
    ctx.translate(finalX, finalY);
    
    if (state.currentFilter && state.currentFilter !== 'none') {
        ctx.filter = state.currentFilter;
    }
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    ctx.drawImage(
        glassesImg,
        -glassesWidth / 2,
        -glassesHeight / 2,
        glassesWidth,
        glassesHeight
    );
    
    ctx.restore();
}

function drawCenteredGlasses(ctx) {
    const glassesImg = imageCache.get(state.selectedGlasses.id);
    if (!glassesImg || !glassesImg.complete) return;
    
    const scale = 0.3 * state.glassesScale;
    const x = canvasElement.width / 2;
    const y = canvasElement.height / 2;
    
    ctx.save();
    ctx.translate(x, y);
    
    if (state.currentFilter && state.currentFilter !== 'none') {
        ctx.filter = state.currentFilter;
    }
    
    ctx.drawImage(
        glassesImg,
        -glassesImg.width * scale / 2,
        -glassesImg.height * scale / 2,
        glassesImg.width * scale,
        glassesImg.height * scale
    );
    
    ctx.restore();
}

function drawBasicVideo() {
    function drawLoop() {
        if (!state.isCameraActive || state.isStaticMode) return;
        
        const ctx = canvasElement.getContext('2d');
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        
        drawCenteredGlasses(ctx);
        
        requestAnimationFrame(drawLoop);
    }
    drawLoop();
}

function activateStaticMode() {
    state.isStaticMode = true;
    state.isCameraActive = false;
    state.faceDetectionActive = false;
    
    if (videoElement.srcObject) {
        videoElement.srcObject.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
    }
    
    staticContainer.style.display = 'flex';
    videoElement.style.display = 'none';
    canvasElement.style.display = 'none';
    permissionOverlay.style.display = 'none';
    loadingOverlay.style.display = 'none';
    
    cameraStatus.textContent = 'Static';
    toggleCameraBtn.innerHTML = '<i class="fas fa-video-slash"></i> Camera: Static';
    
    const cachedImg = imageCache.get(state.selectedGlasses.id);
    staticGlasses.src = cachedImg ? cachedImg.src : `assets/glasses/${state.selectedGlasses.image}`;
    
    staticGlasses.style.position = 'absolute';
    staticGlasses.style.width = `${200 * state.glassesScale}px`;
    staticGlasses.style.left = `${state.glassesX}%`;
    staticGlasses.style.top = `${state.glassesY}%`;
    staticGlasses.style.transform = 'translate(-50%, -50%)';
    staticGlasses.style.cursor = 'grab';
    
    makeDraggable(staticGlasses);
}

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
    
    element.addEventListener('mousedown', startDrag);
    element.addEventListener('touchstart', startDragTouch);
    
    function startDrag(e) {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        element.style.cursor = 'grabbing';
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        e.preventDefault();
    }
    
    function startDragTouch(e) {
        isDragging = true;
        const touch = e.touches[0];
        const rect = element.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
        document.addEventListener('touchmove', dragTouch);
        document.addEventListener('touchend', stopDrag);
        e.preventDefault();
    }
    
    function drag(e) {
        if (!isDragging) return;
        const container = staticContainer.getBoundingClientRect();
        const x = e.clientX - container.left - offsetX;
        const y = e.clientY - container.top - offsetY;
        
        const percentX = (x / container.width) * 100;
        const percentY = (y / container.height) * 100;
        
        state.glassesX = Math.max(10, Math.min(percentX, 90));
        state.glassesY = Math.max(10, Math.min(percentY, 90));
        
        element.style.left = `${state.glassesX}%`;
        element.style.top = `${state.glassesY}%`;
        element.style.transform = 'translate(-50%, -50%)';
    }
    
    function dragTouch(e) {
        if (!isDragging) return;
        const touch = e.touches[0];
        const container = staticContainer.getBoundingClientRect();
        const x = touch.clientX - container.left - offsetX;
        const y = touch.clientY - container.top - offsetY;
        
        const percentX = (x / container.width) * 100;
        const percentY = (y / container.height) * 100;
        
        state.glassesX = Math.max(10, Math.min(percentX, 90));
        state.glassesY = Math.max(10, Math.min(percentY, 90));
        
        element.style.left = `${state.glassesX}%`;
        element.style.top = `${state.glassesY}%`;
        element.style.transform = 'translate(-50%, -50%)';
    }
    
    function stopDrag() {
        isDragging = false;
        element.style.cursor = 'grab';
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', dragTouch);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
    }
}

function toggleCamera() {
    if (state.isCameraActive) {
        state.faceDetectionActive = false;
        const stream = videoElement.srcObject;
        if (stream) stream.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
        
        state.isCameraActive = false;
        cameraStatus.textContent = 'Off';
        toggleCameraBtn.innerHTML = '<i class="fas fa-video-slash"></i> Camera: Off';
        
        const ctx = canvasElement.getContext('2d');
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        
        showPermissionOverlay();
    } else {
        startCamera();
    }
}

function showPermissionOverlay() {
    permissionOverlay.style.display = 'flex';
}

// ===== CAPTURE FUNCTION =====
function capturePhoto(action = 'open') {
    try {
        let dataUrl;
        
        if (state.isCameraActive && !state.isStaticMode) {
            dataUrl = captureFromCanvas();
        } else if (state.isStaticMode) {
            dataUrl = captureFromStatic();
        } else {
            throw new Error('No active view to capture');
        }
        
        if (!dataUrl) throw new Error('Failed to generate image');
        
        state.lastCapturedImage = dataUrl;
        
        switch(action) {
            case 'open':
                openResultPage(dataUrl);
                showNotification('Capture successful!', 'success');
                break;
            case 'download':
                downloadImage(dataUrl);
                break;
            case 'share':
                shareImage(dataUrl);
                break;
        }
        
    } catch (error) {
        console.error('Capture error:', error);
        showNotification(`Capture failed: ${error.message}`, 'error');
    }
}

function captureFromCanvas() {
    try {
        return canvasElement.toDataURL('image/png', 1.0);
    } catch (e) {
        console.warn('Tainted Canvas detected. Saving User Photo only.');
        return captureVideoOnly();
    }
}

function captureVideoOnly() {
    const tempCanvas = document.createElement('canvas');
    const ctx = tempCanvas.getContext('2d');
    
    tempCanvas.width = canvasElement.width;
    tempCanvas.height = canvasElement.height;
    
    ctx.drawImage(videoElement, 0, 0, tempCanvas.width, tempCanvas.height);
    
    if (state.currentFilter && state.currentFilter !== 'none') {
        ctx.filter = state.currentFilter;
    }
    
    ctx.fillStyle = 'rgba(26, 41, 128, 0.9)';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Opticore ViPro', 25, tempCanvas.height - 25);
    
    return tempCanvas.toDataURL('image/png', 1.0);
}

function captureFromStatic() {
    try {
        const tempCanvas = document.createElement('canvas');
        const ctx = tempCanvas.getContext('2d');
        
        tempCanvas.width = 800;
        tempCanvas.height = 600;
        
        if (state.currentFilter && state.currentFilter !== 'none') {
            ctx.filter = state.currentFilter;
        }
        
        const bg = document.getElementById('staticModel');
        if (bg && bg.complete) {
            const scale = Math.min(tempCanvas.width / bg.naturalWidth, tempCanvas.height / bg.naturalHeight) * 0.85;
            const width = bg.naturalWidth * scale;
            const height = bg.naturalHeight * scale;
            ctx.drawImage(bg, (tempCanvas.width - width)/2, (tempCanvas.height - height)/2, width, height);
        }
        
        ctx.filter = 'none';
        
        const glassesImg = imageCache.get(state.selectedGlasses.id);
        if (glassesImg && glassesImg.complete) {
            const container = staticContainer;
            const rect = staticGlasses.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            const x = (rect.left - containerRect.left) * (tempCanvas.width / container.offsetWidth);
            const y = (rect.top - containerRect.top) * (tempCanvas.height / container.offsetHeight);
            const width = rect.width * (tempCanvas.width / container.offsetWidth);
            const height = rect.height * (tempCanvas.height / container.offsetHeight);
            
            ctx.drawImage(glassesImg, x, y, width, height);
        }
        
        ctx.fillStyle = 'rgba(26, 41, 128, 0.9)';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('Opticore ViPro', 25, tempCanvas.height - 25);
        
        return tempCanvas.toDataURL('image/png', 1.0);
        
    } catch (error) {
        console.error('Static capture error:', error);
        return createFallbackCapture();
    }
}

function createFallbackCapture() {
    const tempCanvas = document.createElement('canvas');
    const ctx = tempCanvas.getContext('2d');
    tempCanvas.width = 800;
    tempCanvas.height = 600;
    
    ctx.fillStyle = '#f0f8ff';
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    const glassesImg = imageCache.get(state.selectedGlasses.id);
    if (glassesImg && glassesImg.complete) {
        const scale = 0.5;
        ctx.drawImage(glassesImg, tempCanvas.width/2 - (glassesImg.width*scale)/2, tempCanvas.height/2 - (glassesImg.height*scale)/2, glassesImg.width*scale, glassesImg.height*scale);
    }
    
    ctx.fillStyle = '#1a2980';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(state.selectedGlasses.name, tempCanvas.width / 2, 100);
    
    ctx.fillStyle = 'rgba(26, 41, 128, 0.9)';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Opticore ViPro', 25, tempCanvas.height - 25);
    
    return tempCanvas.toDataURL('image/png', 1.0);
}

function downloadImage(dataUrl) {
    try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').substring(0, 19);
        const filename = `opticore-tryon-${timestamp}.png`;
        
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
        
        showNotification('Download started!', 'success');
        
    } catch (error) {
        console.error('Download error:', error);
        showNotification('Download failed.', 'error');
    }
}

async function shareImage(dataUrl) {
    try {
        const message = `Check out my virtual try-on with ${state.selectedGlasses.name} from Opticore ViPro!`;
        
        if (navigator.share) {
            try {
                const response = await fetch(dataUrl);
                const blob = await response.blob();
                const file = new File([blob], 'opticore-tryon.png', { type: 'image/png' });
                
                await navigator.share({
                    title: 'My Opticore ViPro Virtual Try-On',
                    text: message,
                    files: [file]
                });
                showNotification('Shared successfully!', 'success');
                return;
            } catch (shareError) {
                if (shareError.name !== 'AbortError') console.log('Web Share failed:', shareError);
            }
        }
        
        showShareOptions(dataUrl, message);
        
    } catch (error) {
        console.error('Share error:', error);
        showNotification('Share failed. Try downloading instead.', 'error');
    }
}

function showShareOptions(dataUrl, message) {
    const encodedMessage = encodeURIComponent(message);
    const shareHTML = `
        <div class="popup-overlay" id="sharePopup" style="display: flex;">
            <div class="popup-content">
                <div class="popup-header">
                    <h3><i class="fas fa-share-alt"></i> Share Your Try-On</h3>
                    <button class="popup-close" onclick="document.getElementById('sharePopup').remove()">×</button>
                </div>
                <div class="popup-body">
                    <p style="margin-bottom: 1.5rem; color: #5a6c7d;">Choose how to share:</p>
                    <div class="contact-options">
                        <a href="https://wa.me/?text=${encodedMessage}" target="_blank" class="contact-option-btn whatsapp-option">
                            <i class="fab fa-whatsapp"></i>
                            <div>
                                <strong>WhatsApp</strong>
                                <p style="font-size: 0.9rem; color: #7f8c8d; margin: 0;">Share via WhatsApp</p>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="contact-option-btn" style="border-color: #3b5998;">
                            <i class="fab fa-facebook" style="color: #3b5998; font-size: 1.5rem;"></i>
                            <div>
                                <strong>Facebook</strong>
                                <p style="font-size: 0.9rem; color: #7f8c8d; margin: 0;">Share on Facebook</p>
                            </div>
                        </a>
                        <button onclick="navigator.clipboard.writeText('${dataUrl}').then(() => alert('Image data copied!')).catch(() => alert('Download first'));" class="contact-option-btn" style="border-color: #e74c3c;">
                            <i class="fas fa-download" style="color: #e74c3c; font-size: 1.5rem;"></i>
                            <div>
                                <strong>Download First</strong>
                                <p style="font-size: 0.9rem; color: #7f8c8d; margin: 0;">Download image to share</p>
                            </div>
                        </button>
                    </div>
                    <button onclick="document.getElementById('sharePopup').remove()" class="btn-secondary" style="width: 100%; margin-top: 1rem;">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = shareHTML;
    document.body.appendChild(div);
}

function openResultPage(dataUrl) {
    const win = window.open('', '_blank', 'width=1000,height=750,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes');
    if (!win) {
        showNotification('Please allow popups.', 'warning');
        downloadImage(dataUrl);
        return;
    }
    
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Your Try-On</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
                .result-container { background: white; border-radius: 24px; padding: 3rem; max-width: 900px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); text-align: center; }
                h1 { color: #1a2980; margin-bottom: 1rem; font-size: 2.5rem; }
                img { max-width: 100%; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-bottom: 2rem; }
                .btn-primary { background: linear-gradient(135deg, #1a2980, #2980b9); color: white; border: none; padding: 1rem 2rem; border-radius: 10px; font-weight: 600; cursor: pointer; }
            </style>
        </head>
        <body>
            <div class="result-container">
                <h1>Result</h1>
                <img src="${dataUrl}">
                <button class="btn-primary" onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);
    win.document.close();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">×</button>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add Notification Styles dynamically if missing
if(!document.getElementById('notif-styles')) {
    const style = document.createElement('style');
    style.id = 'notif-styles';
    style.textContent = `
        .notification { position: fixed; top: 20px; right: 20px; background: white; border-radius: 12px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); z-index: 10000; display: flex; align-items: center; gap: 15px; border-left: 5px solid #3498db; transform: translateX(120%); transition: transform 0.3s; }
        .notification.show { transform: translateX(0); }
        .notification-success { border-left-color: #27ae60; background: linear-gradient(to right, #f0f9ff, white); }
        .notification-warning { border-left-color: #f39c12; background: linear-gradient(to right, #fef9e7, white); }
        .notification-content { display: flex; align-items: center; gap: 10px; }
        .notification-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #95a5a6; }
    `;
    document.head.appendChild(style);
}

function sendToWhatsAppDirect() {
    const message = `*OPTICORE VIPRO*\n\nFrame: ${state.selectedGlasses.name}\nScale: ${state.glassesScale}x`;
    const url = `https://wa.me/254113400063?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function applyCanvasFilter(filter) {
    state.currentFilter = filter;
    canvasElement.style.filter = filter;
    staticContainer.style.filter = filter;
}

function handleAdjustment(action) {
    switch(action) {
        case 'size-up':
            state.glassesScale = Math.min(2.0, state.glassesScale + 0.1);
            if (state.isStaticMode) staticGlasses.style.width = `${200 * state.glassesScale}px`;
            break;
        case 'size-down':
            state.glassesScale = Math.max(0.5, state.glassesScale - 0.1);
            if (state.isStaticMode) staticGlasses.style.width = `${200 * state.glassesScale}px`;
            break;
        case 'position-up':
            state.verticalOffset = Math.max(-0.3, state.verticalOffset - 0.03);
            if (state.isStaticMode) { state.glassesY = Math.max(10, state.glassesY - 2); staticGlasses.style.top = `${state.glassesY}%`; }
            break;
        case 'position-down':
            state.verticalOffset = Math.min(0.3, state.verticalOffset + 0.03);
            if (state.isStaticMode) { state.glassesY = Math.min(90, state.glassesY + 2); staticGlasses.style.top = `${state.glassesY}%`; }
            break;
        case 'position-left':
            state.horizontalOffset = Math.max(-0.3, state.horizontalOffset - 0.03);
            if (state.isStaticMode) { state.glassesX = Math.max(10, state.glassesX - 2); staticGlasses.style.left = `${state.glassesX}%`; }
            break;
        case 'position-right':
            state.horizontalOffset = Math.min(0.3, state.horizontalOffset + 0.03);
            if (state.isStaticMode) { state.glassesX = Math.min(90, state.glassesX + 2); staticGlasses.style.left = `${state.glassesX}%`; }
            break;
    }
}

function handleMobileControl(action) {
    handleAdjustment(action.replace('move-', 'position-').replace('zoom-', 'size-'));
}

function filterGlasses(category) {
    const cards = document.querySelectorAll('.glasses-card');
    cards.forEach(card => {
        const id = parseInt(card.dataset.id);
        const glasses = glassesCatalog.find(g => g.id === id);
        if (category === 'all collections' || category === 'all') card.style.display = 'block';
        else if (category === 'professional') card.style.display = glasses.category.includes('professional') ? 'block' : 'none';
        else if (category === 'contemporary') card.style.display = glasses.category.includes('contemporary') ? 'block' : 'none';
        else if (category === 'classic design') card.style.display = glasses.category.includes('classic') ? 'block' : 'none';
        else card.style.display = 'block';
    });
}

function resetApp() {
    if (confirm("Reset?")) {
        if (state.isCameraActive) {
            state.faceDetectionActive = false;
            if (videoElement.srcObject) videoElement.srcObject.getTracks().forEach(track => track.stop());
        }
        
        Object.assign(state, {
            isCameraActive: false, selectedGlasses: glassesCatalog[0], isStaticMode: false, faceDetectionActive: false,
            currentFilter: "none", modelsLoaded: state.modelsLoaded, smartMode: false,
            glassesScale: 1.0, verticalOffset: 0.0, horizontalOffset: 0.0, glassesX: 50, glassesY: 40,
            lastCapturedImage: null, lastDetection: null
        });
        
        videoElement.style.display = 'none'; canvasElement.style.display = 'none'; staticContainer.style.display = 'none';
        canvasElement.style.filter = 'none'; staticContainer.style.filter = 'none';
        staticGlasses.style.left = '50%'; staticGlasses.style.top = '40%'; staticGlasses.style.transform = 'translate(-50%, -50%)'; staticGlasses.style.width = '200px';
        
        document.querySelectorAll('.light-btn').forEach((btn, i) => { btn.classList.remove('active'); if(i===0) btn.classList.add('active'); });
        document.querySelectorAll('.filter-btn').forEach((btn, i) => { btn.classList.remove('active'); if(i===0) btn.classList.add('active'); });
        
        // Reset Mobile SmartMode Button
        if (mobileSmartModeBtn) mobileSmartModeBtn.classList.remove('active');
        
        showPermissionOverlay();
        selectGlasses(glassesCatalog[0]);
        filterGlasses('all');
        showNotification('Reset successfully', 'success');
    }
}

console.log("✅ Opticore ViPro - Secure & Aesthetic Version Loaded");
```
