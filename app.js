// This file will contain JavaScript for handling button clicks and dynamic content. 

document.addEventListener('DOMContentLoaded', () => {
    const dashboardButtons = document.querySelectorAll('.dashboard-button');
    const dynamicContentArea = document.getElementById('dynamic-content-area');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');

    // 각 버튼별 콘텐츠 정의
    const buttonContents = {
        '로그인': `<h3>로그인 메뉴</h3>
                    <p>사용자 로그인 관련 옵션이 여기에 표시됩니다.</p>
                    <form><input type="text" placeholder="아이디"><br><input type="password" placeholder="비밀번호"><br><button type="submit">로그인</button></form>`,
        '기준정보 등록': `<h3>기준정보 등록</h3>
                            <p>아래에서 등록할 항목을 선택해주세요.</p>
                            <div class="sub-menu-grid">
                                <div class="sub-menu-button light-blue" data-sub-menu="고객 등록">
                                    <i class="fas fa-user-plus"></i>
                                    <p>고객 등록</p>
                                </div>
                                <div class="sub-menu-button light-green" data-sub-menu="금형 등록">
                                    <i class="fas fa-cube"></i>
                                    <p>금형 등록</p>
                                </div>
                                <div class="sub-menu-button light-orange" data-sub-menu="재질 규격 등록">
                                    <i class="fas fa-flask"></i>
                                    <p>재질 규격 등록</p>
                                </div>
                                <div class="sub-menu-button light-red" data-sub-menu="원부자재 성분 등록">
                                    <i class="fas fa-vial"></i>
                                    <p>원부자재 성분 등록</p>
                                </div>
                                <div class="sub-menu-button light-purple" data-sub-menu="구매자재 등록">
                                    <i class="fas fa-shopping-basket"></i>
                                    <p>구매자재 등록</p>
                                </div>
                                <div class="sub-menu-button light-teal" data-sub-menu="생산품 기종 등록">
                                    <i class="fas fa-industry"></i>
                                    <p>생산품 기종 등록</p>
                                </div>
                                <div class="sub-menu-button light-brown" data-sub-menu="공급업체 등록">
                                    <i class="fas fa-handshake"></i>
                                    <p>공급업체 등록</p>
                                </div>
                                <div class="sub-menu-button light-gray" data-sub-menu="설비관리 등록">
                                    <i class="fas fa-cogs"></i>
                                    <p>설비관리 등록</p>
                                </div>
                                <div class="sub-menu-button light-pink" data-sub-menu="NCR 결함 코드 등록">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <p>NCR 결함 코드 등록</p>
                                </div>
                                <div class="sub-menu-button light-dark-blue" data-sub-menu="사용자 등록">
                                    <i class="fas fa-users"></i>
                                    <p>사용자 등록</p>
                                </div>
                            </div>`,
        '금형 준비': `<h3>금형 준비 메뉴</h3>
                       <p>금형 관련 준비 사항을 관리합니다.</p>
                       <div class="input-group">
                           <label for="lotNumber">로트번호:</label>
                           <input type="text" id="lotNumber" class="data-input-field" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="viscosityCheck">점도 확인 (50 +5, 50 -5):</label>
                           <input type="number" id="viscosityCheck" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="moldTemp1st">금형 온도 1차 (210 + 10, 210 - 10):</label>
                           <input type="number" id="moldTemp1st" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="coatingRPM">도포 RPM (955):</label>
                           <input type="number" id="coatingRPM" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="coatingCount">도포 회수(5):</label>
                           <input type="number" id="coatingCount" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="coatingHz">도포Hz (12):</label>
                           <input type="number" id="coatingHz" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="coatingTime">도포 시간 (분/초):</label>
                           <input type="text" id="coatingTime" class="data-input-field" size="10" placeholder="분:초">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeThicknessInjection">도형 두께 (주입):</label>
                           <input type="number" id="shapeThicknessInjection" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeThicknessHead">도형 두께 (헤드):</label>
                           <input type="number" id="shapeThicknessHead" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeMoistureInjection">도형 수분도 (주입):</label>
                           <input type="number" id="shapeMoistureInjection" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeMoistureCover">도형 수분도(커버):</label>
                           <input type="number" id="shapeMoistureCover" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeCountCover">도형 횟수 (커버):</label>
                           <input type="number" id="shapeCountCover" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="shapeCountEdge">도형 횟수 (엣지):</label>
                           <input type="number" id="shapeCountEdge" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="moldTemp2nd">금형 온도 2차:</label>
                           <input type="number" id="moldTemp2nd" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="coverTemp">커버 온도 (130도 이하):</label>
                           <input type="number" id="coverTemp" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>
                       <div class="input-group">
                           <label for="rotationSpeed">회전수 (1030 rpm):</label>
                           <input type="number" id="rotationSpeed" class="data-input-field" step="0.01" size="10">
                           <i class="fas fa-microphone microphone-icon"></i>
                       </div>`,
        '용해': `<h3>용해 메뉴</h3>
                   <p>재료 용해 공정 관련 정보를 관리합니다.</p>
                   <div class="sub-menu-grid">
                       <div class="sub-menu-button light-blue" data-sub-menu="용해작업 지시">
                           <i class="fas fa-clipboard-check"></i>
                           <p>용해작업 지시</p>
                       </div>
                       <div class="sub-menu-button light-green" data-sub-menu="용해작업 실적">
                           <i class="fas fa-chart-line"></i>
                           <p>용해작업 실적</p>
                       </div>
                       <div class="sub-menu-button light-orange" data-sub-menu="원부자재 장입">
                           <i class="fas fa-boxes"></i>
                           <p>원부자재 장입</p>
                       </div>
                   </div>`,
        '주조': `<h3>주조 메뉴</h3>
                   <p>제품 주조 공정 관련 정보가 표시됩니다.</p>
                   <div class="input-group">
                       <label for="castingLotNumber">로트번호:</label>
                       <input type="text" id="castingLotNumber" class="data-input-field" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="tappingTemp">출탕 온도 (1420 + 5, -5):</label>
                       <input type="number" id="tappingTemp" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="tappingTime">출탕 시간:</label>
                       <input type="text" id="tappingTime" class="data-input-field" size="10" placeholder="HH:MM">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="tappingWeight">줄탕 중량:</label>
                       <input type="number" id="tappingWeight" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="pouringTemp">주입 온도:</label>
                       <input type="number" id="pouringTemp" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="waitingTime">대기 시간:</label>
                       <input type="number" id="waitingTime" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="pouringTime">주입 시간:</label>
                       <input type="number" id="pouringTime" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingTime">냉각 시간:</label>
                       <input type="number" id="coolingTime" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingTempInjection">냉각후 온도(주입):</label>
                       <input type="number" id="coolingTempInjection" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingTempHead">냉각후 온도(헤드):</label>
                       <input type="number" id="coolingTempHead" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingTempTaper">냉각후 운도(Taper):</label>
                       <input type="number" id="coolingTempTaper" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="drawingTemp">인발 온도:</label>
                       <input type="number" id="drawingTemp" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="completionTime">작업 완료 시간:</label>
                       <input type="text" id="completionTime" class="data-input-field" size="10" placeholder="HH:MM">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingWaterTempSump">냉각수 온도(집수조):</label>
                       <input type="number" id="coolingWaterTempSump" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>
                   <div class="input-group">
                       <label for="coolingWaterTempTankAfter">냉각수 온도(탱크후):</label>
                       <input type="number" id="coolingWaterTempTankAfter" class="data-input-field" step="0.01" size="10">
                       <i class="fas fa-microphone microphone-icon"></i>
                   </div>`,
        '후처리': `<h3>후처리 메뉴</h3>
                     <p>주조 후 후처리 공정 관련 정보가 표시됩니다.</p>
                     <div class="input-group">
                         <label for="postProcessLotNumber">로트번호:</label>
                         <input type="text" id="postProcessLotNumber" class="data-input-field" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="shotStatus">쇼트 여부:</label>
                         <input type="text" id="shotStatus" class="data-input-field" size="10" placeholder="Y/N">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="shotDatetime">쇼트 일시:</label>
                         <input type="datetime-local" id="shotDatetime" class="data-input-field" size="20">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="shotOperator">쇼트 작업자:</label>
                         <input type="text" id="shotOperator" class="data-input-field" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentStatus">열처리 여부:</label>
                         <input type="text" id="heatTreatmentStatus" class="data-input-field" size="10" placeholder="Y/N">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentType">열처리 종류:</label>
                         <select id="heatTreatmentType" class="data-input-field">
                             <option value="">선택</option>
                             <option value="응력제거 열처리">응력제거 열처리</option>
                             <option value="애닐링 소둔 열처리">애닐링 소둔 열처리</option>
                         </select>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentTemp">열처리 온도:</label>
                         <input type="number" id="heatTreatmentTemp" class="data-input-field" step="0.01" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentDuration">열처리 온도 유지시간:</label>
                         <input type="number" id="heatTreatmentDuration" class="data-input-field" step="0.01" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentDate">열처리 일자:</label>
                         <input type="date" id="heatTreatmentDate" class="data-input-field" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>
                     <div class="input-group">
                         <label for="coolingMethod">냉각 방법:</label>
                         <select id="coolingMethod" class="data-input-field">
                             <option value="">선택</option>
                             <option value="로냉">로냉</option>
                             <option value="공냉">공냉</option>
                         </select>
                     </div>
                     <div class="input-group">
                         <label for="heatTreatmentOperator">열처리 작업자:</label>
                         <input type="text" id="heatTreatmentOperator" class="data-input-field" size="10">
                         <i class="fas fa-microphone microphone-icon"></i>
                     </div>`,
        '출하': `<h3>출하 메뉴</h3>
                   <p>완제품 출하 관련 정보가 표시됩니다.</p>
                   <div class="input-group">
                       <label for="shipmentDatetime">출하 일시:</label>
                       <input type="datetime-local" id="shipmentDatetime" class="data-input-field" size="20">
                   </div>
                   <div class="input-group">
                       <label for="vehicleNumber">차량 번호:</label>
                       <input type="text" id="vehicleNumber" class="data-input-field" size="10">
                   </div>
                   <div id="shipment-items-section">
                       <div class="input-group" style="margin-top:16px;">
                           <label for="lotNumberInput">로트번호:</label>
                           <input type="text" id="lotNumberInput" class="data-input-field" size="10">
                           <label for="quantityInput" style="margin-left:12px;">수량:</label>
                           <input type="number" id="quantityInput" class="data-input-field" size="6" min="1" value="1">
                           <button id="addShipmentItemBtn" style="margin-left:12px; padding:6px 16px; background:#2196f3; color:white; border:none; border-radius:4px; cursor:pointer;">추가</button>
                       </div>
                       <div id="shipmentItemsList" style="margin-top:12px;"></div>
                   </div>
                   <div style="margin-top:24px; text-align:center;">
                       <button id="completeShipmentBtn" style="padding:10px 32px; background:#4caf50; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">완료</button>
                   </div>
                   <div id="shipmentResult" style="margin-top:24px;"></div>`,
        '가공': `<h3>가공 메뉴</h3>
                   <p>입고된 제품의 가공 현황을 확인할 수 있습니다.</p>
                   <div id="machining-table-section">
                       <div style="margin-bottom: 16px; text-align: right;">
                           <button id="downloadMachiningCSV" style="background-color: #4caf50; color: white; padding: 8px 20px; border: none; border-radius: 5px; cursor: pointer;">CSV 다운로드</button>
                       </div>
                       <div id="machiningTableContainer"></div>
                       <div id="machiningPagination" style="margin-top: 20px; text-align: center;"></div>
                   </div>`,
        '검사': `<h3>검사 메뉴</h3>
                   <p>입고된 제품의 검사 현황을 확인할 수 있습니다.</p>
                   <div id="inspection-table-section" style="width: 90vw; max-width: 1400px; min-width: 1100px; min-height: 600px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); padding: 32px 24px 24px 24px;">
                       <div style="margin-bottom: 16px; text-align: right;">
                           <button id="downloadInspectionCSV" style="background-color: #4caf50; color: white; padding: 8px 20px; border: none; border-radius: 5px; cursor: pointer;">CSV 다운로드</button>
                       </div>
                       <div id="inspectionTableContainer"></div>
                       <div id="inspectionPagination" style="margin-top: 20px; text-align: center;"></div>
                   </div>`,
        '창고': `<h3>창고 메뉴</h3>
                   <p>창고 재고 및 출하 현황을 확인할 수 있습니다.</p>
                   <div id="warehouse-table-section" style="width: 50%; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); padding: 32px 24px 24px 24px; margin: 0 auto; background: #fff; min-width: 420px;">
                       <div style="margin-bottom: 16px; text-align: right;">
                           <button id="downloadWarehouseCSV" style="background-color: #4caf50; color: white; padding: 8px 20px; border: none; border-radius: 5px; cursor: pointer;">CSV 다운로드</button>
                       </div>
                       <div id="warehouseTableContainer"></div>
                       <div id="warehousePagination" style="margin-top: 20px; text-align: center;"></div>
                   </div>`,
        '구매': `<h3>구매 메뉴</h3>
                   <p>구매 관련 정보가 표시됩니다.</p>`,
        '보고서': `<h3>보고서 메뉴</h3>
                     <p>다양한 생산 및 관리 보고서가 제공됩니다.</p>`,
        '생산 계획/실적': `<h3>생산 계획/실적 메뉴</h3>
                                <p>생산 계획 수립 및 실적 입력/조회 기능이 제공됩니다.</p>
                                <div class="sub-menu-grid">
                                    <div class="sub-menu-button light-blue" data-sub-menu="생산 계획">
                                        <i class="fas fa-calendar-plus"></i>
                                        <p>생산 계획</p>
                                </div>
                                    <div class="sub-menu-button light-green" data-sub-menu="생산 실적">
                                        <i class="fas fa-chart-line"></i>
                                        <p>생산 실적</p>
                                </div>
                                </div>`,
        'AI 분석': `<h3>AI 분석 메뉴</h3>
            <p>AI 분석 관련 주요 데이터 메뉴를 선택하세요.</p>
            <div class="sub-menu-grid" style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; align-items: center; margin-top: 32px;">
                <div class="sub-menu-banner light-blue" data-sub-menu="기종별 불합격 데이터" style="flex: 1 1 350px; min-width: 320px; max-width: 500px; height: 90px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: #e3f2fd; box-shadow: 0 2px 8px rgba(33,150,243,0.08); font-size: 1.25em; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-chart-bar" style="margin-right: 18px; color: #2196f3;"></i> 기종별 불합격 데이터
                </div>
                <div class="sub-menu-banner light-green" data-sub-menu="NCR 불합격 유형별 데이터" style="flex: 1 1 350px; min-width: 320px; max-width: 500px; height: 90px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: #e8f5e9; box-shadow: 0 2px 8px rgba(76,175,80,0.08); font-size: 1.25em; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-exclamation-circle" style="margin-right: 18px; color: #43a047;"></i> NCR 불합격 유형별 데이터
                </div>
                <div class="sub-menu-banner light-orange" data-sub-menu="NCR 결함 발생 List" style="flex: 1 1 350px; min-width: 320px; max-width: 500px; height: 90px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: #fff3e0; box-shadow: 0 2px 8px rgba(255,152,0,0.08); font-size: 1.25em; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-list-alt" style="margin-right: 18px; color: #fb8c00;"></i> NCR 결함 발생 List
                </div>
                <div class="sub-menu-banner light-purple" data-sub-menu="탄소당량 대비 경도" style="flex: 1 1 350px; min-width: 320px; max-width: 500px; height: 90px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: #ede7f6; box-shadow: 0 2px 8px rgba(156,39,176,0.08); font-size: 1.25em; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-balance-scale" style="margin-right: 18px; color: #8e24aa;"></i> 탄소당량 대비 경도
                </div>
                <div class="sub-menu-banner light-dark-blue" data-sub-menu="탄소 당량 대비 인장강도" style="flex: 1 1 350px; min-width: 320px; max-width: 500px; height: 90px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: #e3eafc; box-shadow: 0 2px 8px rgba(33,33,243,0.08); font-size: 1.25em; font-weight: bold; cursor: pointer;">
                    <i class="fas fa-chart-line" style="margin-right: 18px; color: #3949ab;"></i> 탄소 당량 대비 인장강도
                </div>
            </div>`,
        'NCR 결함 코드 등록': `<h4>NCR 결함 코드 등록</h4><p>NCR 결함 코드 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '사용자 등록': `<h4>사용자 등록</h4><p>사용자 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '생산 계획': `<h4>생산 계획</h4>
                    <p>월별 생산 계획을 확인하고 관리합니다.</p>
                    <div id="calendar-container-plan" style="margin-top: 20px;">
                        <div id="calendar-header-plan" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <button id="prevMonthPlan" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">이전</button>
                            <h3 id="currentMonthPlan" style="margin: 0;"></h3>
                            <button id="nextMonthPlan" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">다음</button>
                        </div>
                        <div id="calendar-plan" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #ddd; border: 1px solid #ddd;">
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">일</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">월</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">화</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">수</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">목</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">금</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">토</div>
                        </div>
                    </div>
                    
                    <!-- 일일 생산 계획 팝업 -->
                    <div id="dailyPlanModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);">
                        <div style="background-color: white; margin: 5% auto; padding: 20px; border-radius: 8px; width: 90%; max-width: 1200px; max-height: 80vh; overflow-y: auto;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                <h3 id="dailyPlanTitle">일일 생산 계획</h3>
                                <span id="closeDailyPlan" style="font-size: 24px; cursor: pointer; color: #666;">&times;</span>
                            </div>
                            <div id="dailyPlanContent">
                                <table id="dailyPlanTable" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                                    <thead>
                                        <tr style="background-color: #f5f5f5;">
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">계획일자</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산순서</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">기종</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">품명</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">수량</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산중량(kg)</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">오전/오후</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">특기사항</th>
                                        </tr>
                                    </thead>
                                    <tbody id="dailyPlanTableBody">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`,
        '생산 실적': `<h4>생산 실적</h4>
                    <p>월별 생산 실적을 확인하고 관리합니다.</p>
                    <div id="calendar-container-performance" style="margin-top: 20px;">
                        <div id="calendar-header-performance" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <button id="prevMonthPerformance" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">이전</button>
                            <h3 id="currentMonthPerformance" style="margin: 0;"></h3>
                            <button id="nextMonthPerformance" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">다음</button>
                        </div>
                        <div id="calendar-performance" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #ddd; border: 1px solid #ddd;">
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">일</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">월</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">화</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">수</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">목</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">금</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">토</div>
                        </div>
                    </div>
                    
                    <!-- 일일 생산 실적 팝업 -->
                    <div id="dailyPerformanceModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);">
                        <div style="background-color: white; margin: 5% auto; padding: 20px; border-radius: 8px; width: 90%; max-width: 1200px; max-height: 80vh; overflow-y: auto;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                <h3 id="dailyPerformanceTitle">일일 생산 실적</h3>
                                <span id="closeDailyPerformance" style="font-size: 24px; cursor: pointer; color: #666;">&times;</span>
                            </div>
                            <div id="dailyPerformanceContent">
                                <table id="dailyPerformanceTable" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                                    <thead>
                                        <tr style="background-color: #f5f5f5;">
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 실적</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 순서</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">기종</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">품명</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">수량</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 중량(kg)</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">오전/오후</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">특기 사항</th>
                                        </tr>
                                    </thead>
                                    <tbody id="dailyPerformanceTableBody">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`,
        '용해작업 지시': `<h4>용해작업 지시</h4>
                    <p>용해작업 지시 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
            <div style="text-align: center; padding: 40px;">
                <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">용해작업 지시 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 3.2KB | 형식: CSV</p>
                </div>
                        
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewMeltingInstructionData()" style="
                        background-color: #2196f3; 
                        color: white; 
                        padding: 12px 24px; 
                        border: none; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        font-weight: bold;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                        <i class="fas fa-table"></i>
                        데이터 보기
                    </button>
                            
                            <button onclick="downloadMeltingInstruction()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                        </div>
                    </div>`,
        '용해작업 실적': `<h4>용해작업 실적</h4>
                    <p>용해작업 실적 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">용해작업 실적 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 2.8KB | 형식: CSV</p>
                        </div>
                        
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewMeltingPerformanceData()" style="
                                background-color: #2196f3; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                                <i class="fas fa-table"></i>
                                데이터 보기
                            </button>
                            
                            <button onclick="downloadMeltingPerformance()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                        </div>
                    </div>`,
        '원부자재 장입': `<h4>원부자재 장입</h4>
                    <p>원부자재 장입 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">원부자재 장입 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 2.3KB | 형식: CSV</p>
                        </div>
                        
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewRawMaterialLoadingData()" style="
                                background-color: #2196f3; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                                <i class="fas fa-table"></i>
                                데이터 보기
                            </button>
                            
                            <button onclick="downloadRawMaterialLoading()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                </div>
            </div>`
    };

    // 서브 메뉴 콘텐츠 정의
    const subMenuContents = {
        '고객 등록': `<h4>고객 등록</h4><p>고객 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '금형 등록': `<h4>금형 등록</h4>
                    <p>금형 마스터 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">금형 마스터 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 2.5KB | 형식: CSV</p>
                        </div>
                        
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewMoldMasterData()" style="
                                background-color: #2196f3; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                                <i class="fas fa-table"></i>
                                데이터 보기
                            </button>
                            
                            <button onclick="downloadMoldMaster()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                        </div>
                    </div>`,
        '재질 규격 등록': `<h4>재질 규격 등록</h4>
                    <p>재질 규격 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">재질 규격 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 2.1KB | 형식: CSV</p>
                        </div>
                        
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewMaterialSpecData()" style="
                                background-color: #2196f3; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                                <i class="fas fa-table"></i>
                                데이터 보기
                            </button>
                            
                            <button onclick="downloadMaterialSpec()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                        </div>
                    </div>`,
        '원부자재 성분 등록': `<h4>원부자재 성분 등록</h4>
                    <p>원부자재 성분 데이터를 확인하거나 다운로드할 수 있습니다.</p>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="margin-bottom: 30px;">
                            <i class="fas fa-file-excel" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                            <h5 style="color: #333; margin-bottom: 10px;">원부자재 성분 데이터</h5>
                            <p style="color: #666; margin-bottom: 20px;">파일 크기: 1.8KB | 형식: CSV</p>
                        </div>
                        
                        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="viewRawMaterialData()" style="
                                background-color: #2196f3; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                                <i class="fas fa-table"></i>
                                데이터 보기
                            </button>
                            
                            <button onclick="downloadRawMaterial()" style="
                                background-color: #4caf50; 
                                color: white; 
                                padding: 12px 24px; 
                                border: none; 
                                border-radius: 6px; 
                                cursor: pointer; 
                                font-weight: bold;
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.backgroundColor='#388e3c'" onmouseout="this.style.backgroundColor='#4caf50'">
                                <i class="fas fa-download"></i>
                                CSV 다운로드
                            </button>
                        </div>
                    </div>`,
        '구매자재 등록': `<h4>구매자재 등록</h4><p>구매자재 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '생산품 기종 등록': `<h4>생산품 기종 등록</h4><p>생산품 기종 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '공급업체 등록': `<h4>공급업체 등록</h4><p>공급업체 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '설비관리 등록': `<h4>설비관리 등록</h4><p>설비관리 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        'NCR 결함 코드 등록': `<h4>NCR 결함 코드 등록</h4><p>NCR 결함 코드 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '사용자 등록': `<h4>사용자 등록</h4><p>사용자 등록을 위한 데이터 입력 필드가 여기에 나타날 예정입니다.</p>`,
        '생산 실적': `<h4>생산 실적</h4>
                    <p>월별 생산 실적을 확인하고 관리합니다.</p>
                    <div id="calendar-container-performance" style="margin-top: 20px;">
                        <div id="calendar-header-performance" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <button id="prevMonthPerformance" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">이전</button>
                            <h3 id="currentMonthPerformance" style="margin: 0;"></h3>
                            <button id="nextMonthPerformance" style="background: #2196f3; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">다음</button>
                        </div>
                        <div id="calendar-performance" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #ddd; border: 1px solid #ddd;">
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">일</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">월</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">화</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">수</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">목</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">금</div>
                            <div style="background: #f5f5f5; padding: 10px; text-align: center; font-weight: bold;">토</div>
                        </div>
                    </div>
                    
                    <!-- 일일 생산 실적 팝업 -->
                    <div id="dailyPerformanceModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);">
                        <div style="background-color: white; margin: 5% auto; padding: 20px; border-radius: 8px; width: 90%; max-width: 1200px; max-height: 80vh; overflow-y: auto;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                                <h3 id="dailyPerformanceTitle">일일 생산 실적</h3>
                                <span id="closeDailyPerformance" style="font-size: 24px; cursor: pointer; color: #666;">&times;</span>
                            </div>
                            <div id="dailyPerformanceContent">
                                <table id="dailyPerformanceTable" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                                    <thead>
                                        <tr style="background-color: #f5f5f5;">
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 실적</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 순서</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">기종</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">품명</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">수량</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">생산 중량(kg)</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">오전/오후</th>
                                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">특기 사항</th>
                                        </tr>
                                    </thead>
                                    <tbody id="dailyPerformanceTableBody">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>`,
        '재공재고 현황': `<h4>재공재고 현황</h4>
            <p>재공재고.gsheet 데이터를 확인하거나 다운로드할 수 있습니다.</p>
            <div style="text-align: center; padding: 40px;">
                <div style="margin-bottom: 30px;">
                    <i class="fas fa-table" style="font-size: 4em; color: #2196f3; margin-bottom: 20px;"></i>
                    <h5 style="color: #333; margin-bottom: 10px;">재공재고 데이터</h5>
                    <p style="color: #666; margin-bottom: 20px;">Google Sheets 연동</p>
                </div>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="viewWipInventoryData()" style="
                        background-color: #2196f3; 
                        color: white; 
                        padding: 12px 24px; 
                        border: none; 
                        border-radius: 6px; 
                        cursor: pointer; 
                        font-weight: bold;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.backgroundColor='#1976d2'" onmouseout="this.style.backgroundColor='#2196f3'">
                        <i class="fas fa-table"></i>
                        데이터 보기
                    </button>
                </div>
            </div>`
    };

    dashboardButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonText = button.querySelector('p').textContent;
            console.log(`${buttonText} 버튼이 클릭되었습니다.`);
            
            // 메인 메뉴 버튼 클릭 시 dynamicContentArea 업데이트
            dynamicContentArea.innerHTML = buttonContents[buttonText] || `<h2>${buttonText}을(를) 위한 콘텐츠</h2><p>아직 콘텐츠가 준비되지 않았습니다.</p>`;
            
            // '기준정보 등록', '생산 계획/실적', '용해', '창고' 버튼 클릭 시 서브 메뉴 버튼에 이벤트 리스너 추가
            if (buttonText === '기준정보 등록' || buttonText === '생산 계획/실적' || buttonText === '용해' || buttonText === '창고') {
                // 비동기적으로 DOM이 업데이트된 후 서브 메뉴 버튼을 찾아 이벤트 리스너 추가
                setTimeout(() => {
                    // 창고 메뉴는 .sub-menu-banner, 나머지는 .sub-menu-button
                    const subMenuButtons = dynamicContentArea.querySelectorAll('.sub-menu-button, .sub-menu-banner');
                    subMenuButtons.forEach(subButton => {
                        subButton.addEventListener('click', (subEvent) => {
                            const subMenuText = subButton.getAttribute('data-sub-menu');
                            console.log(`${subMenuText} 서브 메뉴가 클릭되었습니다.`);

                            // 모든 서브 메뉴가 동일하게 subMenuContents를 사용하도록 변경
                            const subContent = subMenuContents[subMenuText] || buttonContents[subMenuText] || `<h4>${subMenuText}</h4><p>아직 콘텐츠가 준비되지 않았습니다.</p>`;
                            dynamicContentArea.innerHTML = subContent;

                            if (subMenuText === '생산 계획') {
                                initializeProductionPlan();
                            }
                            if (subMenuText === '생산 실적') {
                                initializeProductionPerformance();
                            }
                        });
                    });
                }, 0); // DOM 업데이트를 위해 setTimeout 사용
            }

            // 모달 표시
            modal.style.display = 'flex'; // Use flex to center content
        });
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        // 모달 닫을 때 dynamicContentArea 초기화 (선택 사항)
        dynamicContentArea.innerHTML = ''; 
    });

    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            // 모달 닫을 때 dynamicContentArea 초기화 (선택 사항)
            dynamicContentArea.innerHTML = '';
        }
    });

    // 페이지네이션을 위한 전역 변수
    let currentPage = 1;
    const itemsPerPage = 10;
    const moldMasterData = [
        {기종: 'S26MC', 중량: 474, 도형재: '', 금형외경: 579, 금형내경: 403, 간격: 50, 회전수: 1245},
        {기종: 'DL28', 중량: 320, 도형재: '', 금형외경: 558, 금형내경: 408, 간격: 50, 회전수: 1212},
        {기종: 'LUN28', 중량: 332, 도형재: '', 금형외경: 552, 금형내경: 392, 간격: 50, 회전수: 1204},
        {기종: 'EL30', 중량: 500, 도형재: '', 금형외경: 600, 금형내경: 425, 간격: 50, 회전수: 1256},
        {기종: 'S28MC', 중량: 485, 도형재: '', 금형외경: 585, 금형내경: 410, 간격: 50, 회전수: 1248},
        {기종: 'DL30', 중량: 335, 도형재: '', 금형외경: 565, 금형내경: 415, 간격: 50, 회전수: 1215},
        {기종: 'LUN30', 중량: 345, 도형재: '', 금형외경: 560, 금형내경: 400, 간격: 50, 회전수: 1208},
        {기종: 'EL32', 중량: 515, 도형재: '', 금형외경: 610, 금형내경: 430, 간격: 50, 회전수: 1260},
        {기종: 'S30MC', 중량: 495, 도형재: '', 금형외경: 590, 금형내경: 418, 간격: 50, 회전수: 1250},
        {기종: 'DL32', 중량: 350, 도형재: '', 금형외경: 570, 금형내경: 420, 간격: 50, 회전수: 1218},
        {기종: 'LUN32', 중량: 360, 도형재: '', 금형외경: 565, 금형내경: 405, 간격: 50, 회전수: 1210},
        {기종: 'EL34', 중량: 530, 도형재: '', 금형외경: 620, 금형내경: 435, 간격: 50, 회전수: 1264},
        {기종: 'S32MC', 중량: 505, 도형재: '', 금형외경: 595, 금형내경: 425, 간격: 50, 회전수: 1252},
        {기종: 'DL34', 중량: 365, 도형재: '', 금형외경: 575, 금형내경: 425, 간격: 50, 회전수: 1220},
        {기종: 'LUN34', 중량: 375, 도형재: '', 금형외경: 570, 금형내경: 410, 간격: 50, 회전수: 1212},
        {기종: 'EL36', 중량: 545, 도형재: '', 금형외경: 630, 금형내경: 440, 간격: 50, 회전수: 1268},
        {기종: 'S34MC', 중량: 515, 도형재: '', 금형외경: 600, 금형내경: 432, 간격: 50, 회전수: 1254},
        {기종: 'DL36', 중량: 380, 도형재: '', 금형외경: 580, 금형내경: 430, 간격: 50, 회전수: 1222},
        {기종: 'LUN36', 중량: 390, 도형재: '', 금형외경: 575, 금형내경: 415, 간격: 50, 회전수: 1214},
        {기종: 'EL38', 중량: 560, 도형재: '', 금형외경: 640, 금형내경: 445, 간격: 50, 회전수: 1272},
        {기종: 'S36MC', 중량: 525, 도형재: '', 금형외경: 605, 금형내경: 438, 간격: 50, 회전수: 1256},
        {기종: 'DL38', 중량: 395, 도형재: '', 금형외경: 585, 금형내경: 435, 간격: 50, 회전수: 1224},
        {기종: 'LUN38', 중량: 405, 도형재: '', 금형외경: 580, 금형내경: 420, 간격: 50, 회전수: 1216},
        {기종: 'EL40', 중량: 575, 도형재: '', 금형외경: 650, 금형내경: 450, 간격: 50, 회전수: 1276},
        {기종: 'S38MC', 중량: 535, 도형재: '', 금형외경: 610, 금형내경: 442, 간격: 50, 회전수: 1258},
        {기종: 'DL40', 중량: 410, 도형재: '', 금형외경: 590, 금형내경: 440, 간격: 50, 회전수: 1226},
        {기종: 'LUN40', 중량: 420, 도형재: '', 금형외경: 585, 금형내경: 425, 간격: 50, 회전수: 1218},
        {기종: 'EL42', 중량: 590, 도형재: '', 금형외경: 660, 금형내경: 455, 간격: 50, 회전수: 1280},
        {기종: 'S40MC', 중량: 545, 도형재: '', 금형외경: 615, 금형내경: 445, 간격: 50, 회전수: 1260},
        {기종: 'DL42', 중량: 425, 도형재: '', 금형외경: 595, 금형내경: 445, 간격: 50, 회전수: 1228},
        {기종: 'LUN42', 중량: 435, 도형재: '', 금형외경: 590, 금형내경: 430, 간격: 50, 회전수: 1220},
        {기종: 'EL44', 중량: 605, 도형재: '', 금형외경: 670, 금형내경: 460, 간격: 50, 회전수: 1284}
    ];

    // 원부자재 성분 데이터
    const rawMaterialData = [
        {자재코드: 'Scrap_A', 자재명: '고철 A급', C: 0.2, Si: 0.4, Mn: 0.6, Al: '', Cu: '', Sn: '', Fe: ''},
        {자재코드: 'Scrap_B', 자재명: '고철 B급', C: 0.25, Si: 0.4, Mn: 0.6, Al: '', Cu: '', Sn: '', Fe: ''},
        {자재코드: 'Return_A', 자재명: '회수철', C: 3, Si: 0.6, Mn: 1.2, Al: '', Cu: '', Sn: '', Fe: ''},
        {자재코드: 'Pure_Fe', 자재명: '순철', C: '', Si: '', Mn: '', Al: '', Cu: '', Sn: '', Fe: 1},
        {자재코드: 'Fe_Si', 자재명: '페로실리콘', C: '', Si: 0.7, Mn: '', Al: '', Cu: '', Sn: '', Fe: 0.3},
        {자재코드: 'Fe_Mn', 자재명: '페로망간', C: '', Si: '', Mn: 0.7, Al: '', Cu: '', Sn: '', Fe: 0.3},
        {자재코드: 'Al', 자재명: '알루미늄', C: '', Si: '', Mn: '', Al: 1, Cu: '', Sn: '', Fe: ''},
        {자재코드: 'Cu', 자재명: '구리', C: '', Si: '', Mn: '', Al: '', Cu: 1, Sn: '', Fe: ''},
        {자재코드: 'Sn', 자재명: '주석', C: '', Si: '', Mn: '', Al: '', Cu: '', Sn: 1, Fe: ''},
        {자재코드: 'Carbon', 자재명: '탄소', C: 1, Si: '', Mn: '', Al: '', Cu: '', Sn: '', Fe: ''},
        {자재코드: 'Fe_Cr', 자재명: '페로크롬', C: 0.1, Si: 0.3, Mn: 0.5, Al: '', Cu: '', Sn: '', Fe: 0.6},
        {자재코드: 'Fe_Ni', 자재명: '페로니켈', C: 0.05, Si: 0.2, Mn: 0.3, Al: '', Cu: '', Sn: '', Fe: 0.4},
        {자재코드: 'Fe_Mo', 자재명: '페로몰리브덴', C: 0.08, Si: 0.25, Mn: 0.4, Al: '', Cu: '', Sn: '', Fe: 0.5},
        {자재코드: 'Fe_V', 자재명: '페로바나듐', C: 0.12, Si: 0.35, Mn: 0.45, Al: '', Cu: '', Sn: '', Fe: 0.55},
        {자재코드: 'Fe_W', 자재명: '페로텅스텐', C: 0.15, Si: 0.4, Mn: 0.5, Al: '', Cu: '', Sn: '', Fe: 0.6},
        {자재코드: 'Fe_Ti', 자재명: '페로티타늄', C: 0.06, Si: 0.2, Mn: 0.3, Al: 0.1, Cu: '', Sn: '', Fe: 0.4},
        {자재코드: 'Fe_B', 자재명: '페로보론', C: 0.18, Si: 0.45, Mn: 0.55, Al: '', Cu: '', Sn: '', Fe: 0.65},
        {자재코드: 'Fe_P', 자재명: '페로인', C: 0.22, Si: 0.5, Mn: 0.6, Al: '', Cu: '', Sn: '', Fe: 0.7},
        {자재코드: 'Fe_S', 자재명: '페로황', C: 0.25, Si: 0.55, Mn: 0.65, Al: '', Cu: '', Sn: '', Fe: 0.75},
        {자재코드: 'Fe_N', 자재명: '페로질소', C: 0.28, Si: 0.6, Mn: 0.7, Al: '', Cu: '', Sn: '', Fe: 0.8}
    ];

    // 원부자재 성분 데이터용 페이지네이션 변수
    let currentRawMaterialPage = 1;

    // 페이지네이션 함수
    function renderTable(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = moldMasterData.slice(startIndex, endIndex);
        
        let tableRows = '';
        pageData.forEach(item => {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.기종}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.중량}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.도형재}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.금형외경}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.금형내경}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.간격}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.회전수}</td>
                </tr>
            `;
        });
        
        return tableRows;
    }

    // 페이지네이션 컨트롤 함수
    function renderPagination() {
        const totalPages = Math.ceil(moldMasterData.length / itemsPerPage);
        let paginationHTML = '<div style="margin-top: 20px; text-align: center;">';
        
        // 이전 페이지 버튼
        if (currentPage > 1) {
            paginationHTML += `<button onclick="changePage(${currentPage - 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">이전</button>`;
        }
        
        // 페이지 번호
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentPage) {
                paginationHTML += `<button style="
                    background-color: #4caf50; 
                    color: white; 
                    padding: 8px 15px; 
                    border: none; 
                    border-radius: 4px; 
                    margin: 0 5px;
                    font-weight: bold;
                ">${i}</button>`;
            } else {
                paginationHTML += `<button onclick="changePage(${i})" style="
                    background-color: #f0f0f0; 
                    color: #333; 
                    padding: 8px 15px; 
                    border: 1px solid #ddd; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    margin: 0 5px;
                ">${i}</button>`;
            }
        }
        
        // 다음 페이지 버튼
        if (currentPage < totalPages) {
            paginationHTML += `<button onclick="changePage(${currentPage + 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">다음</button>`;
        }
        
        paginationHTML += '</div>';
        return paginationHTML;
    }

    // 페이지 변경 함수
    window.changePage = function(page) {
        currentPage = page;
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 금형 마스터 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> ${moldMasterData.length}개</p>
                        <p><strong>현재 페이지:</strong> ${currentPage} / ${Math.ceil(moldMasterData.length / itemsPerPage)}</p>
                        <p><strong>페이지당 표시:</strong> ${itemsPerPage}개</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; min-width: 600px;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">기종</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">중량</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">도형재</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">금형외경</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">금형내경</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">간격</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">회전수</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${renderTable(currentPage)}
                            </tbody>
                        </table>
                    </div>
                    ${renderPagination()}
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadMoldMaster()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                        </button>
                    </div>
                </div>
            `;
        }
    };

    // 금형 마스터 파일 다운로드 함수
    window.downloadMoldMaster = function() {
        // 30개 금형 마스터 데이터 생성
        const csvData = `기종,중량,도형재,금형외경,금형내경,간격,회전수
S26MC,474,,579,403,50,1245
DL28,320,,558,408,50,1212
LUN28,332,,552,392,50,1204
EL30,500,,600,425,50,1256
S28MC,485,,585,410,50,1248
DL30,335,,565,415,50,1215
LUN30,345,,560,400,50,1208
EL32,515,,610,430,50,1260
S30MC,495,,590,418,50,1250
DL32,350,,570,420,50,1218
LUN32,360,,565,405,50,1210
EL34,530,,620,435,50,1264
S32MC,505,,595,425,50,1252
DL34,365,,575,425,50,1220
LUN34,375,,570,410,50,1212
EL36,545,,630,440,50,1268
S34MC,515,,600,432,50,1254
DL36,380,,580,430,50,1222
LUN36,390,,575,415,50,1214
EL38,560,,640,445,50,1272
S36MC,525,,605,438,50,1256
DL38,395,,585,435,50,1224
LUN38,405,,580,420,50,1216
EL40,575,,650,450,50,1276
S38MC,535,,610,442,50,1258
DL40,410,,590,440,50,1226
LUN40,420,,585,425,50,1218
EL42,590,,660,455,50,1280
S40MC,545,,615,445,50,1260
DL42,425,,595,445,50,1228
LUN42,435,,590,430,50,1220
EL44,605,,670,460,50,1284`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '금형_마스터_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // 사용자에게 알림
        alert('금형 마스터 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 금형 마스터 데이터 보기 함수
    window.viewMoldMasterData = function() {
        currentPage = 1; // 첫 페이지로 초기화
        window.changePage(1);
    };

    // 원부자재 성분 데이터 테이블 렌더링 함수
    function renderRawMaterialTable(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = rawMaterialData.slice(startIndex, endIndex);
        
        let tableRows = '';
        pageData.forEach(item => {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.자재코드}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.자재명}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.C}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Si}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Mn}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Al}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Cu}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Sn}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Fe}</td>
                </tr>
            `;
        });
        
        return tableRows;
    }

    // 원부자재 성분 데이터 페이지네이션 컨트롤 함수
    function renderRawMaterialPagination() {
        const totalPages = Math.ceil(rawMaterialData.length / itemsPerPage);
        let paginationHTML = '<div style="margin-top: 20px; text-align: center;">';
        
        // 이전 페이지 버튼
        if (currentRawMaterialPage > 1) {
            paginationHTML += `<button onclick="changeRawMaterialPage(${currentRawMaterialPage - 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">이전</button>`;
        }
        
        // 페이지 번호
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentRawMaterialPage) {
                paginationHTML += `<button style="
                    background-color: #4caf50; 
                    color: white; 
                    padding: 8px 15px; 
                    border: none; 
                    border-radius: 4px; 
                    margin: 0 5px;
                    font-weight: bold;
                ">${i}</button>`;
            } else {
                paginationHTML += `<button onclick="changeRawMaterialPage(${i})" style="
                    background-color: #f0f0f0; 
                    color: #333; 
                    padding: 8px 15px; 
                    border: 1px solid #ddd; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    margin: 0 5px;
                ">${i}</button>`;
            }
        }
        
        // 다음 페이지 버튼
        if (currentRawMaterialPage < totalPages) {
            paginationHTML += `<button onclick="changeRawMaterialPage(${currentRawMaterialPage + 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">다음</button>`;
        }
        
        paginationHTML += '</div>';
        return paginationHTML;
    }

    // 원부자재 성분 데이터 페이지 변경 함수
    window.changeRawMaterialPage = function(page) {
        currentRawMaterialPage = page;
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 원부자재 성분 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> ${rawMaterialData.length}개</p>
                        <p><strong>현재 페이지:</strong> ${currentRawMaterialPage} / ${Math.ceil(rawMaterialData.length / itemsPerPage)}</p>
                        <p><strong>페이지당 표시:</strong> ${itemsPerPage}개</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; min-width: 1000px;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">자재코드</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">자재명</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">C</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Si</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mn</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Al</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Cu</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Sn</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Fe</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${renderRawMaterialTable(currentRawMaterialPage)}
                            </tbody>
                        </table>
                    </div>
                    ${renderRawMaterialPagination()}
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadRawMaterial()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                            </button>
                    </div>
                </div>
            `;
        }
    };

    // 원부자재 성분 데이터 다운로드 함수
    window.downloadRawMaterial = function() {
        const csvData = `자재코드,자재명,C,Si,Mn,Al,Cu,Sn,Fe
Scrap_A,고철 A급,0.2,0.4,0.6,,,,
Scrap_B,고철 B급,0.25,0.4,0.6,,,,
Return_A,회수철,3,0.6,1.2,,,,
Pure_Fe,순철,,,,,,1
Fe_Si,페로실리콘,,0.7,,,,0.3
Fe_Mn,페로망간,,,0.7,,,0.3
Al,알루미늄,,,,1,,,
Cu,구리,,,,,1,
Sn,주석,,,,,,1,
Carbon,탄소,1,,,,,,
Fe_Cr,페로크롬,0.1,0.3,0.5,,,0.6
Fe_Ni,페로니켈,0.05,0.2,0.3,,,0.4
Fe_Mo,페로몰리브덴,0.08,0.25,0.4,,,0.5
Fe_V,페로바나듐,0.12,0.35,0.45,,,0.55
Fe_W,페로텅스텐,0.15,0.4,0.5,,,0.6
Fe_Ti,페로티타늄,0.06,0.2,0.3,0.1,,0.4
Fe_B,페로보론,0.18,0.45,0.55,,,0.65
Fe_P,페로인,0.22,0.5,0.6,,,0.7
Fe_S,페로황,0.25,0.55,0.65,,,0.75
Fe_N,페로질소,0.28,0.6,0.7,,,0.8`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '원부자재_성분_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // 사용자에게 알림
        alert('원부자재 성분 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 원부자재 성분 데이터 보기 함수
    window.viewRawMaterialData = function() {
        currentRawMaterialPage = 1; // 첫 페이지로 초기화
        window.changeRawMaterialPage(1);
    };

    // 캘린더 관련 전역 변수
    let currentDate = new Date();
    let selectedDate = new Date();

    // 일일 생산 계획 샘플 데이터 (8회 생산)
    const dailyProductionPlans = {
        '2024-01-15': [
            { 순서: 1, 기종: 'S26MC', 품명: 'S26MC 금형', 수량: 50, 중량: 474, 시간: '오전', 특기사항: '고품질 요구' },
            { 순서: 2, 기종: 'DL28', 품명: 'DL28 금형', 수량: 45, 중량: 320, 시간: '오전', 특기사항: '급한 주문' },
            { 순서: 3, 기종: 'LUN28', 품명: 'LUN28 금형', 수량: 60, 중량: 332, 시간: '오후', 특기사항: '정밀 가공 필요' },
            { 순서: 4, 기종: 'EL30', 품명: 'EL30 금형', 수량: 40, 중량: 500, 시간: '오후', 특기사항: '특수 재질' },
            { 순서: 5, 기종: 'S28MC', 품명: 'S28MC 금형', 수량: 55, 중량: 485, 시간: '오후', 특기사항: '내구성 테스트' },
            { 순서: 6, 기종: 'DL30', 품명: 'DL30 금형', 수량: 35, 중량: 335, 시간: '오후', 특기사항: '표면 처리 필요' },
            { 순서: 7, 기종: 'LUN30', 품명: 'LUN30 금형', 수량: 70, 중량: 345, 시간: '오후', 특기사항: '대량 생산' },
            { 순서: 8, 기종: 'EL32', 품명: 'EL32 금형', 수량: 30, 중량: 515, 시간: '오후', 특기사항: '고온 내성' }
        ],
        '2024-01-20': [
            { 순서: 1, 기종: 'S30MC', 품명: 'S30MC 금형', 수량: 65, 중량: 495, 시간: '오전', 특기사항: '정밀도 높음' },
            { 순서: 2, 기종: 'DL32', 품명: 'DL32 금형', 수량: 50, 중량: 350, 시간: '오전', 특기사항: '경량화' },
            { 순서: 3, 기종: 'LUN32', 품명: 'LUN32 금형', 수량: 55, 중량: 360, 시간: '오전', 특기사항: '내식성 강화' },
            { 순서: 4, 기종: 'EL34', 품명: 'EL34 금형', 수량: 45, 중량: 530, 시간: '오후', 특기사항: '고강도' },
            { 순서: 5, 기종: 'S32MC', 품명: 'S32MC 금형', 수량: 60, 중량: 505, 시간: '오후', 특기사항: '마모 저항' },
            { 순서: 6, 기종: 'DL34', 품명: 'DL34 금형', 수량: 40, 중량: 365, 시간: '오후', 특기사항: '열처리 필요' },
            { 순서: 7, 기종: 'LUN34', 품명: 'LUN34 금형', 수량: 75, 중량: 375, 시간: '오후', 특기사항: '대형 주문' },
            { 순서: 8, 기종: 'EL36', 품명: 'EL36 금형', 수량: 35, 중량: 545, 시간: '오후', 특기사항: '특수 용도' }
        ],
        '2024-06-15': [
            { 순서: 1, 기종: 'S26MC', 품명: 'S26MC 금형', 수량: 50, 중량: 474, 시간: '오전', 특기사항: '고품질 요구' },
            { 순서: 2, 기종: 'DL28', 품명: 'DL28 금형', 수량: 45, 중량: 320, 시간: '오전', 특기사항: '급한 주문' },
            { 순서: 3, 기종: 'LUN28', 품명: 'LUN28 금형', 수량: 60, 중량: 332, 시간: '오후', 특기사항: '정밀 가공 필요' },
            { 순서: 4, 기종: 'EL30', 품명: 'EL30 금형', 수량: 40, 중량: 500, 시간: '오후', 특기사항: '특수 재질' },
            { 순서: 5, 기종: 'S28MC', 품명: 'S28MC 금형', 수량: 55, 중량: 485, 시간: '오후', 특기사항: '내구성 테스트' },
            { 순서: 6, 기종: 'DL30', 품명: 'DL30 금형', 수량: 35, 중량: 335, 시간: '오후', 특기사항: '표면 처리 필요' },
            { 순서: 7, 기종: 'LUN30', 품명: 'LUN30 금형', 수량: 70, 중량: 345, 시간: '오후', 특기사항: '대량 생산' },
            { 순서: 8, 기종: 'EL32', 품명: 'EL32 금형', 수량: 30, 중량: 515, 시간: '오후', 특기사항: '고온 내성' }
        ],
        '2024-06-16': [
            { 순서: 1, 기종: 'S30MC', 품명: 'S30MC 금형', 수량: 65, 중량: 495, 시간: '오전', 특기사항: '정밀도 높음' },
            { 순서: 2, 기종: 'DL32', 품명: 'DL32 금형', 수량: 50, 중량: 350, 시간: '오전', 특기사항: '경량화 검증 완료' },
            { 순서: 3, 기종: 'LUN32', 품명: 'LUN32 금형', 수량: 55, 중량: 360, 시간: '오전', 특기사항: '내식성 테스트 통과' },
            { 순서: 4, 기종: 'EL34', 품명: 'EL34 금형', 수량: 43, 중량: 530, 시간: '오후', 특기사항: '고강도 요구 충족' },
            { 순서: 5, 기종: 'S32MC', 품명: 'S32MC 금형', 수량: 57, 중량: 505, 시간: '오후', 특기사항: '마모 저항 확인' },
            { 순서: 6, 기종: 'DL34', 품명: 'DL34 금형', 수량: 38, 중량: 365, 시간: '오후', 특기사항: '열처리 완료' },
            { 순서: 7, 기종: 'LUN34', 품명: 'LUN34 금형', 수량: 72, 중량: 375, 시간: '오후', 특기사항: '대형 주문 완료' },
            { 순서: 8, 기종: 'EL36', 품명: 'EL36 금형', 수량: 32, 중량: 545, 시간: '오후', 특기사항: '특수 용도 검증' }
        ],
        '2024-06-17': [
            { 순서: 1, 기종: 'S34MC', 품명: 'S34MC 금형', 수량: 76, 중량: 515, 시간: '오전', 특기사항: '고정밀 가공 완료' },
            { 순서: 2, 기종: 'DL36', 품명: 'DL36 금형', 수량: 52, 중량: 380, 시간: '오전', 특기사항: '내열성 강화 확인' },
            { 순서: 3, 기종: 'LUN36', 품명: 'LUN36 금형', 수량: 61, 중량: 390, 시간: '오전', 특기사항: '내식성 테스트 완료' },
            { 순서: 4, 기종: 'EL38', 품명: 'EL38 금형', 수량: 47, 중량: 560, 시간: '오후', 특기사항: '고강도 요구 충족' },
            { 순서: 5, 기종: 'S36MC', 품명: 'S36MC 금형', 수량: 66, 중량: 525, 시간: '오후', 특기사항: '마모 저항성 확인' },
            { 순서: 6, 기종: 'DL38', 품명: 'DL38 금형', 수량: 42, 중량: 395, 시간: '오후', 특기사항: '경량화 설계 검증' },
            { 순서: 7, 기종: 'LUN38', 품명: 'LUN38 금형', 수량: 81, 중량: 405, 시간: '오후', 특기사항: '대량 생산 완료' },
            { 순서: 8, 기종: 'EL40', 품명: 'EL40 금형', 수량: 37, 중량: 575, 시간: '오후', 특기사항: '특수 용도 완료' }
        ],
        '2024-06-18': [
            { 순서: 1, 기종: 'S38MC', 품명: 'S38MC 금형', 수량: 71, 중량: 535, 시간: '오전', 특기사항: '정밀도 높음 확인' },
            { 순서: 2, 기종: 'DL40', 품명: 'DL40 금형', 수량: 57, 중량: 410, 시간: '오전', 특기사항: '내구성 강화 완료' },
            { 순서: 3, 기종: 'LUN40', 품명: 'LUN40 금형', 수량: 66, 중량: 420, 시간: '오전', 특기사항: '표면 처리 완료' },
            { 순서: 4, 기종: 'EL42', 품명: 'EL42 금형', 수량: 52, 중량: 590, 시간: '오후', 특기사항: '고온 내성 확인' },
            { 순서: 5, 기종: 'S40MC', 품명: 'S40MC 금형', 수량: 61, 중량: 545, 시간: '오후', 특기사항: '마모 저항 검증' },
            { 순서: 6, 기종: 'DL42', 품명: 'DL42 금형', 수량: 47, 중량: 425, 시간: '오후', 특기사항: '경량화 완료' },
            { 순서: 7, 기종: 'LUN42', 품명: 'LUN42 금형', 수량: 76, 중량: 435, 시간: '오후', 특기사항: '대형 주문 완료' },
            { 순서: 8, 기종: 'EL44', 품명: 'EL44 금형', 수량: 32, 중량: 605, 시간: '오후', 특기사항: '특수 재질 검증' }
        ],
        '2024-06-19': [
            { 순서: 1, 기종: 'S34MC', 품명: 'S34MC 금형', 수량: 80, 중량: 515, 시간: '오전', 특기사항: '고정밀 가공' },
            { 순서: 2, 기종: 'DL36', 품명: 'DL36 금형', 수량: 55, 중량: 380, 시간: '오전', 특기사항: '내열성 강화' },
            { 순서: 3, 기종: 'LUN36', 품명: 'LUN36 금형', 수량: 65, 중량: 390, 시간: '오전', 특기사항: '내식성 테스트' },
            { 순서: 4, 기종: 'EL38', 품명: 'EL38 금형', 수량: 50, 중량: 560, 시간: '오후', 특기사항: '고강도 요구' },
            { 순서: 5, 기종: 'S36MC', 품명: 'S36MC 금형', 수량: 70, 중량: 525, 시간: '오후', 특기사항: '마모 저항성' },
            { 순서: 6, 기종: 'DL38', 품명: 'DL38 금형', 수량: 45, 중량: 395, 시간: '오후', 특기사항: '경량화 설계' },
            { 순서: 7, 기종: 'LUN38', 품명: 'LUN38 금형', 수량: 85, 중량: 405, 시간: '오후', 특기사항: '대량 생산' },
            { 순서: 8, 기종: 'EL40', 품명: 'EL40 금형', 수량: 40, 중량: 575, 시간: '오후', 특기사항: '특수 용도' }
        ],
        '2024-06-20': [
            { 순서: 1, 기종: 'S38MC', 품명: 'S38MC 금형', 수량: 75, 중량: 535, 시간: '오전', 특기사항: '정밀도 높음' },
            { 순서: 2, 기종: 'DL40', 품명: 'DL40 금형', 수량: 60, 중량: 410, 시간: '오전', 특기사항: '내구성 강화' },
            { 순서: 3, 기종: 'LUN40', 품명: 'LUN40 금형', 수량: 70, 중량: 420, 시간: '오전', 특기사항: '표면 처리' },
            { 순서: 4, 기종: 'EL42', 품명: 'EL42 금형', 수량: 55, 중량: 590, 시간: '오후', 특기사항: '고온 내성' },
            { 순서: 5, 기종: 'S40MC', 품명: 'S40MC 금형', 수량: 65, 중량: 545, 시간: '오후', 특기사항: '마모 저항' },
            { 순서: 6, 기종: 'DL42', 품명: 'DL42 금형', 수량: 50, 중량: 425, 시간: '오후', 특기사항: '경량화' },
            { 순서: 7, 기종: 'LUN42', 품명: 'LUN42 금형', 수량: 80, 중량: 435, 시간: '오후', 특기사항: '대형 주문' },
            { 순서: 8, 기종: 'EL44', 품명: 'EL44 금형', 수량: 35, 중량: 605, 시간: '오후', 특기사항: '특수 재질' }
        ],
        '2024-06-21': [
            { 순서: 1, 기종: 'S26MC', 품명: 'S26MC 금형', 수량: 90, 중량: 474, 시간: '오전', 특기사항: '급한 주문' },
            { 순서: 2, 기종: 'DL28', 품명: 'DL28 금형', 수량: 65, 중량: 320, 시간: '오전', 특기사항: '고품질 요구' },
            { 순서: 3, 기종: 'LUN28', 품명: 'LUN28 금형', 수량: 75, 중량: 332, 시간: '오전', 특기사항: '정밀 가공' },
            { 순서: 4, 기종: 'EL30', 품명: 'EL30 금형', 수량: 60, 중량: 500, 시간: '오후', 특기사항: '내열성 테스트' },
            { 순서: 5, 기종: 'S28MC', 품명: 'S28MC 금형', 수량: 80, 중량: 485, 시간: '오후', 특기사항: '내구성 강화' },
            { 순서: 6, 기종: 'DL30', 품명: 'DL30 금형', 수량: 55, 중량: 335, 시간: '오후', 특기사항: '표면 처리' },
            { 순서: 7, 기종: 'LUN30', 품명: 'LUN30 금형', 수량: 95, 중량: 345, 시간: '오후', 특기사항: '대량 생산' },
            { 순서: 8, 기종: 'EL32', 품명: 'EL32 금형', 수량: 45, 중량: 515, 시간: '오후', 특기사항: '특수 용도' }
        ],
        '2024-06-23': [
            { 순서: 1, 기종: 'S30MC', 품명: 'S30MC 금형', 수량: 70, 중량: 495, 시간: '오전', 특기사항: '정밀도 높음' },
            { 순서: 2, 기종: 'DL32', 품명: 'DL32 금형', 수량: 50, 중량: 350, 시간: '오전', 특기사항: '경량화 설계' },
            { 순서: 3, 기종: 'LUN32', 품명: 'LUN32 금형', 수량: 60, 중량: 360, 시간: '오전', 특기사항: '내식성 강화' },
            { 순서: 4, 기종: 'EL34', 품명: 'EL34 금형', 수량: 40, 중량: 530, 시간: '오후', 특기사항: '고강도 요구' },
            { 순서: 5, 기종: 'S32MC', 품명: 'S32MC 금형', 수량: 75, 중량: 505, 시간: '오후', 특기사항: '마모 저항성' },
            { 순서: 6, 기종: 'DL34', 품명: 'DL34 금형', 수량: 45, 중량: 365, 시간: '오후', 특기사항: '열처리 필요' },
            { 순서: 7, 기종: 'LUN34', 품명: 'LUN34 금형', 수량: 85, 중량: 375, 시간: '오후', 특기사항: '대형 주문' },
            { 순서: 8, 기종: 'EL36', 품명: 'EL36 금형', 수량: 30, 중량: 545, 시간: '오후', 특기사항: '특수 재질' }
        ]
    };

    // 캘린더 렌더링 함수
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // 월 표시 업데이트
        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const currentMonthElement = document.getElementById('currentMonth');
        if (currentMonthElement) {
            currentMonthElement.textContent = `${year}년 ${monthNames[month]}`;
        }

        // 캘린더 그리드 생성
        const calendarElement = document.getElementById('calendar');
        if (!calendarElement) return;

        // 기존 날짜 셀들 제거 (헤더 제외)
        const existingCells = calendarElement.querySelectorAll('.calendar-day');
        existingCells.forEach(cell => cell.remove());

        // 월의 첫 번째 날과 마지막 날
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        // 오늘 날짜
        const today = new Date();
        const todayString = today.toISOString().split('T')[0];

        // 캘린더 날짜 생성
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.style.cssText = `
                background: white; 
                padding: 10px; 
                text-align: center; 
                cursor: pointer; 
                border: 1px solid #ddd;
                min-height: 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            `;

            const dayNumber = date.getDate();
            const dateString = date.toISOString().split('T')[0];
            
            // 현재 월이 아닌 날짜는 회색으로 표시
            if (date.getMonth() !== month) {
                dayElement.style.color = '#ccc';
            }
            
            // 오늘 날짜는 파란색 배경으로 표시
            if (dateString === todayString) {
                dayElement.style.backgroundColor = '#2196f3';
                dayElement.style.color = 'white';
                dayElement.style.fontWeight = 'bold';
            }

            dayElement.innerHTML = `<div>${dayNumber}</div>`;
            
            // 생산 계획이 있는 날짜는 표시
            if (dailyProductionPlans[dateString]) {
                dayElement.innerHTML += '<div style="font-size: 10px; color: #4caf50; margin-top: 2px;">●</div>';
            }

            // 날짜 클릭 이벤트
            dayElement.addEventListener('click', () => {
                showDailyPlan(dateString);
            });

            calendarElement.appendChild(dayElement);
        }
    }

    // 일일 생산 계획 표시 함수
    function showDailyPlan(dateString) {
        const modal = document.getElementById('dailyPlanModal');
        const title = document.getElementById('dailyPlanTitle');
        const tableBody = document.getElementById('dailyPlanTableBody');
        
        if (!modal || !title || !tableBody) return;

        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
        title.textContent = `${formattedDate} 일일 생산 계획`;

        const plans = dailyProductionPlans[dateString] || [];
        
        if (plans.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #666;">해당 날짜의 생산 계획이 없습니다.</td></tr>';
        } else {
            let tableRows = '';
            plans.forEach(plan => {
                tableRows += `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${dateString}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.순서}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.기종}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.품명}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.수량}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.중량}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.시간}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${plan.특기사항}</td>
                    </tr>
                `;
            });
            tableBody.innerHTML = tableRows;
        }

        modal.style.display = 'block';
    }

    // 캘린더 이벤트 리스너 설정
    function setupCalendarEvents() {
        const prevButton = document.getElementById('prevMonth');
        const nextButton = document.getElementById('nextMonth');
        const closeButton = document.getElementById('closeDailyPlan');
        const modal = document.getElementById('dailyPlanModal');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    // 생산 계획 서브 메뉴 클릭 시 캘린더 초기화
    function initializeProductionPlan() {
        setTimeout(() => {
            renderPlanCalendar();
            setupPlanCalendarEvents();
        }, 100);
    }

    // 생산 계획 캘린더 관련 전역 변수
    let currentDatePlan = new Date();
    let selectedDatePlan = new Date();

    // 생산 계획 캘린더 렌더링 함수
    function renderPlanCalendar() {
        const year = currentDatePlan.getFullYear();
        const month = currentDatePlan.getMonth();
        
        // 월 표시 업데이트
        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const currentMonthElement = document.getElementById('currentMonthPlan');
        if (currentMonthElement) {
            currentMonthElement.textContent = `${year}년 ${monthNames[month]}`;
        }

        // 캘린더 그리드 생성
        const calendarElement = document.getElementById('calendar-plan');
        if (!calendarElement) return;

        // 기존 날짜 셀들 제거 (헤더 제외)
        const existingCells = calendarElement.querySelectorAll('.calendar-day-plan');
        existingCells.forEach(cell => cell.remove());

        // 월의 첫 번째 날과 마지막 날
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        // 오늘 날짜
        const today = new Date();
        const todayString = today.toISOString().split('T')[0];

        // 캘린더 날짜 생성
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day-plan';
            dayElement.style.cssText = `
                background: white; 
                padding: 10px; 
                text-align: center; 
                cursor: pointer; 
                border: 1px solid #ddd;
                min-height: 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            `;

            const dayNumber = date.getDate();
            const dateString = date.toISOString().split('T')[0];
            
            // 현재 월이 아닌 날짜는 회색으로 표시
            if (date.getMonth() !== month) {
                dayElement.style.color = '#ccc';
            }
            
            // 오늘 날짜는 파란색 배경으로 표시
            if (dateString === todayString) {
                dayElement.style.backgroundColor = '#2196f3';
                dayElement.style.color = 'white';
                dayElement.style.fontWeight = 'bold';
            }

            dayElement.innerHTML = `<div>${dayNumber}</div>`;
            
            // 생산 계획이 있는 날짜는 표시
            if (dailyProductionPlans[dateString]) {
                dayElement.innerHTML += '<div style="font-size: 10px; color: #4caf50; margin-top: 2px;">●</div>';
            }

            // 날짜 클릭 이벤트
            dayElement.addEventListener('click', () => {
                showDailyPlan(dateString);
            });

            calendarElement.appendChild(dayElement);
        }
    }

    // 생산 계획 캘린더 이벤트 리스너 설정
    function setupPlanCalendarEvents() {
        const prevButton = document.getElementById('prevMonthPlan');
        const nextButton = document.getElementById('nextMonthPlan');
        const closeButton = document.getElementById('closeDailyPlan');
        const modal = document.getElementById('dailyPlanModal');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentDatePlan.setMonth(currentDatePlan.getMonth() - 1);
                renderPlanCalendar();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentDatePlan.setMonth(currentDatePlan.getMonth() + 1);
                renderPlanCalendar();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    // 전역 함수로 등록
    window.initializeProductionPlan = initializeProductionPlan;

    // 일일 생산 실적 샘플 데이터 (8회 생산)
    const dailyProductionPerformance = {
        '2024-06-15': [
            { 순서: 1, 기종: 'S26MC', 품명: 'S26MC 금형', 수량: 48, 중량: 474, 시간: '오전', 특기사항: '계획 대비 96% 달성' },
            { 순서: 2, 기종: 'DL28', 품명: 'DL28 금형', 수량: 42, 중량: 320, 시간: '오전', 특기사항: '품질 검사 통과' },
            { 순서: 3, 기종: 'LUN28', 품명: 'LUN28 금형', 수량: 58, 중량: 332, 시간: '오후', 특기사항: '정밀 가공 완료' },
            { 순서: 4, 기종: 'EL30', 품명: 'EL30 금형', 수량: 38, 중량: 500, 시간: '오후', 특기사항: '특수 재질 처리' },
            { 순서: 5, 기종: 'S28MC', 품명: 'S28MC 금형', 수량: 52, 중량: 485, 시간: '오후', 특기사항: '내구성 테스트 완료' },
            { 순서: 6, 기종: 'DL30', 품명: 'DL30 금형', 수량: 33, 중량: 335, 시간: '오후', 특기사항: '표면 처리 완료' },
            { 순서: 7, 기종: 'LUN30', 품명: 'LUN30 금형', 수량: 67, 중량: 345, 시간: '오후', 특기사항: '대량 생산 완료' },
            { 순서: 8, 기종: 'EL32', 품명: 'EL32 금형', 수량: 28, 중량: 515, 시간: '오후', 특기사항: '고온 내성 확인' }
        ],
        '2024-06-16': [
            { 순서: 1, 기종: 'S30MC', 품명: 'S30MC 금형', 수량: 62, 중량: 495, 시간: '오전', 특기사항: '정밀도 기준 충족' },
            { 순서: 2, 기종: 'DL32', 품명: 'DL32 금형', 수량: 47, 중량: 350, 시간: '오전', 특기사항: '경량화 검증 완료' },
            { 순서: 3, 기종: 'LUN32', 품명: 'LUN32 금형', 수량: 53, 중량: 360, 시간: '오전', 특기사항: '내식성 테스트 통과' },
            { 순서: 4, 기종: 'EL34', 품명: 'EL34 금형', 수량: 43, 중량: 530, 시간: '오후', 특기사항: '고강도 요구 충족' },
            { 순서: 5, 기종: 'S32MC', 품명: 'S32MC 금형', 수량: 57, 중량: 505, 시간: '오후', 특기사항: '마모 저항 확인' },
            { 순서: 6, 기종: 'DL34', 품명: 'DL34 금형', 수량: 38, 중량: 365, 시간: '오후', 특기사항: '열처리 완료' },
            { 순서: 7, 기종: 'LUN34', 품명: 'LUN34 금형', 수량: 72, 중량: 375, 시간: '오후', 특기사항: '대형 주문 완료' },
            { 순서: 8, 기종: 'EL36', 품명: 'EL36 금형', 수량: 32, 중량: 545, 시간: '오후', 특기사항: '특수 용도 검증' }
        ],
        '2024-06-17': [
            { 순서: 1, 기종: 'S34MC', 품명: 'S34MC 금형', 수량: 76, 중량: 515, 시간: '오전', 특기사항: '고정밀 가공 완료' },
            { 순서: 2, 기종: 'DL36', 품명: 'DL36 금형', 수량: 52, 중량: 380, 시간: '오전', 특기사항: '내열성 강화 확인' },
            { 순서: 3, 기종: 'LUN36', 품명: 'LUN36 금형', 수량: 61, 중량: 390, 시간: '오전', 특기사항: '내식성 테스트 완료' },
            { 순서: 4, 기종: 'EL38', 품명: 'EL38 금형', 수량: 47, 중량: 560, 시간: '오후', 특기사항: '고강도 요구 충족' },
            { 순서: 5, 기종: 'S36MC', 품명: 'S36MC 금형', 수량: 66, 중량: 525, 시간: '오후', 특기사항: '마모 저항성 확인' },
            { 순서: 6, 기종: 'DL38', 품명: 'DL38 금형', 수량: 42, 중량: 395, 시간: '오후', 특기사항: '경량화 설계 검증' },
            { 순서: 7, 기종: 'LUN38', 품명: 'LUN38 금형', 수량: 81, 중량: 405, 시간: '오후', 특기사항: '대량 생산 완료' },
            { 순서: 8, 기종: 'EL40', 품명: 'EL40 금형', 수량: 37, 중량: 575, 시간: '오후', 특기사항: '특수 용도 완료' }
        ],
        '2024-06-18': [
            { 순서: 1, 기종: 'S38MC', 품명: 'S38MC 금형', 수량: 71, 중량: 535, 시간: '오전', 특기사항: '정밀도 높음 확인' },
            { 순서: 2, 기종: 'DL40', 품명: 'DL40 금형', 수량: 57, 중량: 410, 시간: '오전', 특기사항: '내구성 강화 완료' },
            { 순서: 3, 기종: 'LUN40', 품명: 'LUN40 금형', 수량: 66, 중량: 420, 시간: '오전', 특기사항: '표면 처리 완료' },
            { 순서: 4, 기종: 'EL42', 품명: 'EL42 금형', 수량: 52, 중량: 590, 시간: '오후', 특기사항: '고온 내성 확인' },
            { 순서: 5, 기종: 'S40MC', 품명: 'S40MC 금형', 수량: 61, 중량: 545, 시간: '오후', 특기사항: '마모 저항 검증' },
            { 순서: 6, 기종: 'DL42', 품명: 'DL42 금형', 수량: 47, 중량: 425, 시간: '오후', 특기사항: '경량화 완료' },
            { 순서: 7, 기종: 'LUN42', 품명: 'LUN42 금형', 수량: 76, 중량: 435, 시간: '오후', 특기사항: '대형 주문 완료' },
            { 순서: 8, 기종: 'EL44', 품명: 'EL44 금형', 수량: 32, 중량: 605, 시간: '오후', 특기사항: '특수 재질 검증' }
        ]
    };

    // 생산 실적 캘린더 관련 전역 변수
    let currentDatePerformance = new Date();
    let selectedDatePerformance = new Date();

    // 생산 실적 캘린더 렌더링 함수
    function renderPerformanceCalendar() {
        const year = currentDatePerformance.getFullYear();
        const month = currentDatePerformance.getMonth();
        
        // 월 표시 업데이트
        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const currentMonthElement = document.getElementById('currentMonthPerformance');
        if (currentMonthElement) {
            currentMonthElement.textContent = `${year}년 ${monthNames[month]}`;
        }

        // 캘린더 그리드 생성
        const calendarElement = document.getElementById('calendar-performance');
        if (!calendarElement) return;

        // 기존 날짜 셀들 제거 (헤더 제외)
        const existingCells = calendarElement.querySelectorAll('.calendar-day-performance');
        existingCells.forEach(cell => cell.remove());

        // 월의 첫 번째 날과 마지막 날
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        // 오늘 날짜
        const today = new Date();
        const todayString = today.toISOString().split('T')[0];

        // 캘린더 날짜 생성
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day-performance';
            dayElement.style.cssText = `
                background: white; 
                padding: 10px; 
                text-align: center; 
                cursor: pointer; 
                border: 1px solid #ddd;
                min-height: 60px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            `;

            const dayNumber = date.getDate();
            const dateString = date.toISOString().split('T')[0];
            
            // 현재 월이 아닌 날짜는 회색으로 표시
            if (date.getMonth() !== month) {
                dayElement.style.color = '#ccc';
            }
            
            // 오늘 날짜는 파란색 배경으로 표시
            if (dateString === todayString) {
                dayElement.style.backgroundColor = '#2196f3';
                dayElement.style.color = 'white';
                dayElement.style.fontWeight = 'bold';
            }

            dayElement.innerHTML = `<div>${dayNumber}</div>`;
            
            // 생산 실적이 있는 날짜는 표시
            if (dailyProductionPerformance[dateString]) {
                dayElement.innerHTML += '<div style="font-size: 10px; color: #ff9800; margin-top: 2px;">●</div>';
            }

            // 날짜 클릭 이벤트
            dayElement.addEventListener('click', () => {
                showDailyPerformance(dateString);
            });

            calendarElement.appendChild(dayElement);
        }
    }

    // 일일 생산 실적 표시 함수
    function showDailyPerformance(dateString) {
        const modal = document.getElementById('dailyPerformanceModal');
        const title = document.getElementById('dailyPerformanceTitle');
        const tableBody = document.getElementById('dailyPerformanceTableBody');
        
        if (!modal || !title || !tableBody) return;

        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
        title.textContent = `${formattedDate} 일일 생산 실적`;

        const performance = dailyProductionPerformance[dateString] || [];
        
        if (performance.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #666;">해당 날짜의 생산 실적이 없습니다.</td></tr>';
        } else {
            let tableRows = '';
            performance.forEach(item => {
                tableRows += `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${dateString}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.순서}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.기종}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.품명}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.수량}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.중량}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.시간}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${item.특기사항}</td>
                    </tr>
                `;
            });
            tableBody.innerHTML = tableRows;
        }

        modal.style.display = 'block';
    }

    // 생산 실적 캘린더 이벤트 리스너 설정
    function setupPerformanceCalendarEvents() {
        const prevButton = document.getElementById('prevMonthPerformance');
        const nextButton = document.getElementById('nextMonthPerformance');
        const closeButton = document.getElementById('closeDailyPerformance');
        const modal = document.getElementById('dailyPerformanceModal');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentDatePerformance.setMonth(currentDatePerformance.getMonth() - 1);
                renderPerformanceCalendar();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentDatePerformance.setMonth(currentDatePerformance.getMonth() + 1);
                renderPerformanceCalendar();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    // 생산 실적 서브 메뉴 클릭 시 캘린더 초기화
    function initializeProductionPerformance() {
        setTimeout(() => {
            renderPerformanceCalendar();
            setupPerformanceCalendarEvents();
        }, 100);
    }

    // 전역 함수로 등록
    window.initializeProductionPerformance = initializeProductionPerformance;

    // 재질 규격 데이터
    const materialSpecData = [
        {재질코드: 'FC150', 재질명: '회주철 FC150', C_max: 3.5, C_min: 3.0, Si_max: 2.5, Si_min: 1.8, Mn_max: 1.0, Mn_min: 0.6, P_max: 0.25, P_min: 0.10, S_max: 0.20, S_min: 0.08, TS_MPa_max: 180, TS_MPa_min: 150, YS_MPa_max: 120, YS_MPa_min: 95, EL_percent_max: 2.5, EL_percent_min: 1.5, HB_max: 180, HB_min: 160, 용도: '일반구조용', 특성: '기본회주철'},
        {재질코드: 'FC200', 재질명: '회주철 FC200', C_max: 3.4, C_min: 2.9, Si_max: 2.7, Si_min: 2.0, Mn_max: 1.2, Mn_min: 0.7, P_max: 0.28, P_min: 0.12, S_max: 0.22, S_min: 0.10, TS_MPa_max: 230, TS_MPa_min: 200, YS_MPa_max: 150, YS_MPa_min: 125, EL_percent_max: 3.5, EL_percent_min: 2.0, HB_max: 200, HB_min: 180, 용도: '기계구조용', 특성: '고강도회주철'},
        {재질코드: 'FC250', 재질명: '회주철 FC250', C_max: 3.3, C_min: 2.8, Si_max: 2.9, Si_min: 2.2, Mn_max: 1.4, Mn_min: 0.8, P_max: 0.30, P_min: 0.15, S_max: 0.25, S_min: 0.12, TS_MPa_max: 280, TS_MPa_min: 250, YS_MPa_max: 180, YS_MPa_min: 155, EL_percent_max: 4.0, EL_percent_min: 2.5, HB_max: 220, HB_min: 200, 용도: '고강도구조용', 특성: '특수회주철'},
        {재질코드: 'FC300', 재질명: '회주철 FC300', C_max: 3.2, C_min: 2.7, Si_max: 3.1, Si_min: 2.4, Mn_max: 1.6, Mn_min: 0.9, P_max: 0.32, P_min: 0.18, S_max: 0.28, S_min: 0.15, TS_MPa_max: 330, TS_MPa_min: 300, YS_MPa_max: 210, YS_MPa_min: 185, EL_percent_max: 4.5, EL_percent_min: 3.0, HB_max: 240, HB_min: 220, 용도: '고강도구조용', 특성: '특수고강도회주철'},
        {재질코드: 'FCD400', 재질명: '구상흑연주철 FCD400', C_max: 3.8, C_min: 3.4, Si_max: 3.2, Si_min: 2.5, Mn_max: 0.5, Mn_min: 0.2, P_max: 0.08, P_min: 0.03, S_max: 0.03, S_min: 0.01, TS_MPa_max: 450, TS_MPa_min: 400, YS_MPa_max: 280, YS_MPa_min: 250, EL_percent_max: 22, EL_percent_min: 18, HB_max: 150, HB_min: 130, 용도: '고연성구조용', 특성: '기본구상흑연주철'},
        {재질코드: 'FCD500', 재질명: '구상흑연주철 FCD500', C_max: 3.7, C_min: 3.3, Si_max: 3.4, Si_min: 2.7, Mn_max: 0.6, Mn_min: 0.3, P_max: 0.09, P_min: 0.04, S_max: 0.035, S_min: 0.015, TS_MPa_max: 550, TS_MPa_min: 500, YS_MPa_max: 350, YS_MPa_min: 320, EL_percent_max: 18, EL_percent_min: 15, HB_max: 170, HB_min: 150, 용도: '고강도연성용', 특성: '고강도구상흑연주철'},
        {재질코드: 'FCD600', 재질명: '구상흑연주철 FCD600', C_max: 3.6, C_min: 3.2, Si_max: 3.6, Si_min: 2.9, Mn_max: 0.7, Mn_min: 0.4, P_max: 0.10, P_min: 0.05, S_max: 0.04, S_min: 0.02, TS_MPa_max: 650, TS_MPa_min: 600, YS_MPa_max: 400, YS_MPa_min: 370, EL_percent_max: 15, EL_percent_min: 12, HB_max: 190, HB_min: 170, 용도: '고강도연성용', 특성: '특수고강도구상흑연주철'},
        {재질코드: 'FCD700', 재질명: '구상흑연주철 FCD700', C_max: 3.5, C_min: 3.1, Si_max: 3.8, Si_min: 3.1, Mn_max: 0.8, Mn_min: 0.5, P_max: 0.12, P_min: 0.06, S_max: 0.045, S_min: 0.025, TS_MPa_max: 750, TS_MPa_min: 700, YS_MPa_max: 450, YS_MPa_min: 400, EL_percent_max: 12, EL_percent_min: 10, HB_max: 210, HB_min: 190, 용도: '고강도연성용', 특성: '최고강도구상흑연주철'}
    ];

    // 재질 규격 데이터용 페이지네이션 변수
    let currentMaterialSpecPage = 1;

    // 재질 규격 데이터 테이블 렌더링 함수
    function renderMaterialSpecTable(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = materialSpecData.slice(startIndex, endIndex);
        
        let tableRows = '';
        pageData.forEach(item => {
            tableRows += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.재질코드}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.재질명}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.C_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.C_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Si_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Si_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Mn_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.Mn_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.P_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.P_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.S_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.S_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.TS_MPa_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.TS_MPa_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.YS_MPa_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.YS_MPa_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.EL_percent_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.EL_percent_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.HB_max}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.HB_min}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.용도}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.특성}</td>
                </tr>
            `;
        });
        
        return tableRows;
    }

    // 재질 규격 데이터 페이지네이션 컨트롤 함수
    function renderMaterialSpecPagination() {
        const totalPages = Math.ceil(materialSpecData.length / itemsPerPage);
        let paginationHTML = '<div style="margin-top: 20px; text-align: center;">';
        
        // 이전 페이지 버튼
        if (currentMaterialSpecPage > 1) {
            paginationHTML += `<button onclick="changeMaterialSpecPage(${currentMaterialSpecPage - 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">이전</button>`;
        }
        
        // 페이지 번호
        for (let i = 1; i <= totalPages; i++) {
            if (i === currentMaterialSpecPage) {
                paginationHTML += `<button style="
                    background-color: #4caf50; 
                    color: white; 
                    padding: 8px 15px; 
                    border: none; 
                    border-radius: 4px; 
                    margin: 0 5px;
                    font-weight: bold;
                ">${i}</button>`;
            } else {
                paginationHTML += `<button onclick="changeMaterialSpecPage(${i})" style="
                    background-color: #f0f0f0; 
                    color: #333; 
                    padding: 8px 15px; 
                    border: 1px solid #ddd; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    margin: 0 5px;
                ">${i}</button>`;
            }
        }
        
        // 다음 페이지 버튼
        if (currentMaterialSpecPage < totalPages) {
            paginationHTML += `<button onclick="changeMaterialSpecPage(${currentMaterialSpecPage + 1})" style="
                background-color: #2196f3; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                border-radius: 4px; 
                cursor: pointer; 
                margin: 0 5px;
            ">다음</button>`;
        }
        
        paginationHTML += '</div>';
        return paginationHTML;
    }

    // 재질 규격 데이터 페이지 변경 함수
    window.changeMaterialSpecPage = function(page) {
        currentMaterialSpecPage = page;
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 재질 규격 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> ${materialSpecData.length}개</p>
                        <p><strong>현재 페이지:</strong> ${currentMaterialSpecPage} / ${Math.ceil(materialSpecData.length / itemsPerPage)}</p>
                        <p><strong>페이지당 표시:</strong> ${itemsPerPage}개</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; min-width: 2000px;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">재질코드</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">재질명</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">C_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">C_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Si_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Si_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mn_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Mn_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">P_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">P_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">S_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">S_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">TS_MPa_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">TS_MPa_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">YS_MPa_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">YS_MPa_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">EL_percent_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">EL_percent_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">HB_max</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">HB_min</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">용도</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">특성</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${renderMaterialSpecTable(currentMaterialSpecPage)}
                            </tbody>
                        </table>
                    </div>
                    ${renderMaterialSpecPagination()}
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadMaterialSpec()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                        </button>
                    </div>
                </div>
            `;
        }
    };

    // 재질 규격 데이터 다운로드 함수
    window.downloadMaterialSpec = function() {
        const csvData = `재질코드,재질명,C_max,C_min,Si_max,Si_min,Mn_max,Mn_min,P_max,P_min,S_max,S_min,TS_MPa_max,TS_MPa_min,YS_MPa_max,YS_MPa_min,EL_percent_max,EL_percent_min,HB_max,HB_min,용도,특성
FC150,회주철 FC150,3.5,3.0,2.5,1.8,1.0,0.6,0.25,0.10,0.20,0.08,180,150,120,95,2.5,1.5,180,160,일반구조용,기본회주철
FC200,회주철 FC200,3.4,2.9,2.7,2.0,1.2,0.7,0.28,0.12,0.22,0.10,230,200,150,125,3.5,2.0,200,180,기계구조용,고강도회주철
FC250,회주철 FC250,3.3,2.8,2.9,2.2,1.4,0.8,0.30,0.15,0.25,0.12,280,250,180,155,4.0,2.5,220,200,고강도구조용,특수회주철
FC300,회주철 FC300,3.2,2.7,3.1,2.4,1.6,0.9,0.32,0.18,0.28,0.15,330,300,210,185,4.5,3.0,240,220,고강도구조용,특수고강도회주철
FCD400,구상흑연주철 FCD400,3.8,3.4,3.2,2.5,0.5,0.2,0.08,0.03,0.03,0.01,450,400,280,250,22,18,150,130,고연성구조용,기본구상흑연주철
FCD500,구상흑연주철 FCD500,3.7,3.3,3.4,2.7,0.6,0.3,0.09,0.04,0.035,0.015,550,500,350,320,18,15,170,150,고강도연성용,고강도구상흑연주철
FCD600,구상흑연주철 FCD600,3.6,3.2,3.6,2.9,0.7,0.4,0.10,0.05,0.04,0.02,650,600,400,370,15,12,190,170,고강도연성용,특수고강도구상흑연주철
FCD700,구상흑연주철 FCD700,3.5,3.1,3.8,3.1,0.8,0.5,0.12,0.06,0.045,0.025,750,700,450,400,12,10,210,190,고강도연성용,최고강도구상흑연주철`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '재질_규격_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // 사용자에게 알림
        alert('재질 규격 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 재질 규격 데이터 보기 함수
    window.viewMaterialSpecData = function() {
        currentMaterialSpecPage = 1; // 첫 페이지로 초기화
        window.changeMaterialSpecPage(1);
    };

    // 용해작업 지시 데이터 보기 함수
    window.viewMeltingInstructionData = function() {
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 용해작업 지시 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> 15개</p>
                        <p><strong>파일 크기:</strong> 3.2KB</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">지시번호</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">지시일자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">기종</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">목표수량</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">목표온도</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">목표시간</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">작업자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MI-2024-001</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-15</td><td style="border: 1px solid #ddd; padding: 8px;">S26MC</td><td style="border: 1px solid #ddd; padding: 8px;">100</td><td style="border: 1px solid #ddd; padding: 8px;">1420°C</td><td style="border: 1px solid #ddd; padding: 8px;">08:00</td><td style="border: 1px solid #ddd; padding: 8px;">김철수</td><td style="border: 1px solid #ddd; padding: 8px;">완료</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MI-2024-002</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-16</td><td style="border: 1px solid #ddd; padding: 8px;">DL28</td><td style="border: 1px solid #ddd; padding: 8px;">80</td><td style="border: 1px solid #ddd; padding: 8px;">1415°C</td><td style="border: 1px solid #ddd; padding: 8px;">09:00</td><td style="border: 1px solid #ddd; padding: 8px;">이영희</td><td style="border: 1px solid #ddd; padding: 8px;">진행중</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MI-2024-003</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-17</td><td style="border: 1px solid #ddd; padding: 8px;">LUN28</td><td style="border: 1px solid #ddd; padding: 8px;">120</td><td style="border: 1px solid #ddd; padding: 8px;">1425°C</td><td style="border: 1px solid #ddd; padding: 8px;">07:30</td><td style="border: 1px solid #ddd; padding: 8px;">박민수</td><td style="border: 1px solid #ddd; padding: 8px;">대기</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MI-2024-004</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-18</td><td style="border: 1px solid #ddd; padding: 8px;">EL30</td><td style="border: 1px solid #ddd; padding: 8px;">90</td><td style="border: 1px solid #ddd; padding: 8px;">1418°C</td><td style="border: 1px solid #ddd; padding: 8px;">08:30</td><td style="border: 1px solid #ddd; padding: 8px;">최지영</td><td style="border: 1px solid #ddd; padding: 8px;">완료</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MI-2024-005</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-19</td><td style="border: 1px solid #ddd; padding: 8px;">S28MC</td><td style="border: 1px solid #ddd; padding: 8px;">110</td><td style="border: 1px solid #ddd; padding: 8px;">1422°C</td><td style="border: 1px solid #ddd; padding: 8px;">09:15</td><td style="border: 1px solid #ddd; padding: 8px;">정수민</td><td style="border: 1px solid #ddd; padding: 8px;">진행중</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadMeltingInstruction()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                        </button>
                    </div>
                </div>
            `;
        }
    };

    // 용해작업 지시 데이터 다운로드 함수
    window.downloadMeltingInstruction = function() {
        const csvData = `지시번호,지시일자,기종,목표수량,목표온도,목표시간,작업자,상태
MI-2024-001,2024-01-15,S26MC,100,1420°C,08:00,김철수,완료
MI-2024-002,2024-01-16,DL28,80,1415°C,09:00,이영희,진행중
MI-2024-003,2024-01-17,LUN28,120,1425°C,07:30,박민수,대기
MI-2024-004,2024-01-18,EL30,90,1418°C,08:30,최지영,완료
MI-2024-005,2024-01-19,S28MC,110,1422°C,09:15,정수민,진행중`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '용해작업_지시_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert('용해작업 지시 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 용해작업 실적 데이터 보기 함수
    window.viewMeltingPerformanceData = function() {
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 용해작업 실적 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> 12개</p>
                        <p><strong>파일 크기:</strong> 2.8KB</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">실적번호</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">작업일자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">기종</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">실제수량</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">실제온도</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">작업시간</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">작업자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">품질상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MP-2024-001</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-15</td><td style="border: 1px solid #ddd; padding: 8px;">S26MC</td><td style="border: 1px solid #ddd; padding: 8px;">98</td><td style="border: 1px solid #ddd; padding: 8px;">1421°C</td><td style="border: 1px solid #ddd; padding: 8px;">07:55</td><td style="border: 1px solid #ddd; padding: 8px;">김철수</td><td style="border: 1px solid #ddd; padding: 8px;">양호</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MP-2024-002</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-16</td><td style="border: 1px solid #ddd; padding: 8px;">DL28</td><td style="border: 1px solid #ddd; padding: 8px;">82</td><td style="border: 1px solid #ddd; padding: 8px;">1416°C</td><td style="border: 1px solid #ddd; padding: 8px;">08:45</td><td style="border: 1px solid #ddd; padding: 8px;">이영희</td><td style="border: 1px solid #ddd; padding: 8px;">양호</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MP-2024-003</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-17</td><td style="border: 1px solid #ddd; padding: 8px;">LUN28</td><td style="border: 1px solid #ddd; padding: 8px;">118</td><td style="border: 1px solid #ddd; padding: 8px;">1424°C</td><td style="border: 1px solid #ddd; padding: 8px;">07:25</td><td style="border: 1px solid #ddd; padding: 8px;">박민수</td><td style="border: 1px solid #ddd; padding: 8px;">양호</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MP-2024-004</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-18</td><td style="border: 1px solid #ddd; padding: 8px;">EL30</td><td style="border: 1px solid #ddd; padding: 8px;">88</td><td style="border: 1px solid #ddd; padding: 8px;">1419°C</td><td style="border: 1px solid #ddd; padding: 8px;">08:20</td><td style="border: 1px solid #ddd; padding: 8px;">최지영</td><td style="border: 1px solid #ddd; padding: 8px;">양호</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">MP-2024-005</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-19</td><td style="border: 1px solid #ddd; padding: 8px;">S28MC</td><td style="border: 1px solid #ddd; padding: 8px;">105</td><td style="border: 1px solid #ddd; padding: 8px;">1423°C</td><td style="border: 1px solid #ddd; padding: 8px;">09:10</td><td style="border: 1px solid #ddd; padding: 8px;">정수민</td><td style="border: 1px solid #ddd; padding: 8px;">양호</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadMeltingPerformance()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                        </button>
                    </div>
                </div>
            `;
        }
    };

    // 용해작업 실적 데이터 다운로드 함수
    window.downloadMeltingPerformance = function() {
        const csvData = `실적번호,작업일자,기종,실제수량,실제온도,작업시간,작업자,품질상태
MP-2024-001,2024-01-15,S26MC,98,1421°C,07:55,김철수,양호
MP-2024-002,2024-01-16,DL28,82,1416°C,08:45,이영희,양호
MP-2024-003,2024-01-17,LUN28,118,1424°C,07:25,박민수,양호
MP-2024-004,2024-01-18,EL30,88,1419°C,08:20,최지영,양호
MP-2024-005,2024-01-19,S28MC,105,1423°C,09:10,정수민,양호`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '용해작업_실적_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert('용해작업 실적 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 원부자재 장입 데이터 보기 함수
    window.viewRawMaterialLoadingData = function() {
        const contentDiv = document.getElementById('dynamic-content-area');
        if (contentDiv) {
            contentDiv.innerHTML = `
                <div class="file-viewer">
                    <h6><i class="fas fa-table"></i> 원부자재 장입 데이터</h6>
                    <div class="file-info">
                        <p><strong>데이터 형식:</strong> CSV</p>
                        <p><strong>레코드 수:</strong> 10개</p>
                        <p><strong>파일 크기:</strong> 2.3KB</p>
                    </div>
                    <div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                            <thead>
                                <tr style="background-color: #f5f5f5;">
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">장입번호</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">장입일자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">자재코드</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">자재명</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">장입량(kg)</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">장입시간</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">작업자</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">RL-2024-001</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-15</td><td style="border: 1px solid #ddd; padding: 8px;">Scrap_A</td><td style="border: 1px solid #ddd; padding: 8px;">고철 A급</td><td style="border: 1px solid #ddd; padding: 8px;">500</td><td style="border: 1px solid #ddd; padding: 8px;">06:30</td><td style="border: 1px solid #ddd; padding: 8px;">김철수</td><td style="border: 1px solid #ddd; padding: 8px;">정상</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">RL-2024-002</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-16</td><td style="border: 1px solid #ddd; padding: 8px;">Return_A</td><td style="border: 1px solid #ddd; padding: 8px;">회수철</td><td style="border: 1px solid #ddd; padding: 8px;">300</td><td style="border: 1px solid #ddd; padding: 8px;">07:00</td><td style="border: 1px solid #ddd; padding: 8px;">이영희</td><td style="border: 1px solid #ddd; padding: 8px;">정상</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">RL-2024-003</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-17</td><td style="border: 1px solid #ddd; padding: 8px;">Fe_Si</td><td style="border: 1px solid #ddd; padding: 8px;">페로실리콘</td><td style="border: 1px solid #ddd; padding: 8px;">50</td><td style="border: 1px solid #ddd; padding: 8px;">08:15</td><td style="border: 1px solid #ddd; padding: 8px;">박민수</td><td style="border: 1px solid #ddd; padding: 8px;">정상</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">RL-2024-004</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-18</td><td style="border: 1px solid #ddd; padding: 8px;">Fe_Mn</td><td style="border: 1px solid #ddd; padding: 8px;">페로망간</td><td style="border: 1px solid #ddd; padding: 8px;">40</td><td style="border: 1px solid #ddd; padding: 8px;">08:30</td><td style="border: 1px solid #ddd; padding: 8px;">최지영</td><td style="border: 1px solid #ddd; padding: 8px;">정상</td></tr>
                                <tr><td style="border: 1px solid #ddd; padding: 8px;">RL-2024-005</td><td style="border: 1px solid #ddd; padding: 8px;">2024-01-19</td><td style="border: 1px solid #ddd; padding: 8px;">Pure_Fe</td><td style="border: 1px solid #ddd; padding: 8px;">순철</td><td style="border: 1px solid #ddd; padding: 8px;">100</td><td style="border: 1px solid #ddd; padding: 8px;">07:45</td><td style="border: 1px solid #ddd; padding: 8px;">정수민</td><td style="border: 1px solid #ddd; padding: 8px;">정상</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="file-actions-bottom" style="margin-top: 20px; text-align: center;">
                        <button onclick="downloadRawMaterialLoading()" class="download-btn-inline" style="
                            background-color: #4caf50; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            margin: 0 10px;
                        ">
                            <i class="fas fa-download"></i> CSV 다운로드
                        </button>
                    </div>
                </div>
            `;
        }
    };

    // 원부자재 장입 데이터 다운로드 함수
    window.downloadRawMaterialLoading = function() {
        const csvData = `장입번호,장입일자,자재코드,자재명,장입량(kg),장입시간,작업자,비고
RL-2024-001,2024-01-15,Scrap_A,고철 A급,500,06:30,김철수,정상
RL-2024-002,2024-01-16,Return_A,회수철,300,07:00,이영희,정상
RL-2024-003,2024-01-17,Fe_Si,페로실리콘,50,08:15,박민수,정상
RL-2024-004,2024-01-18,Fe_Mn,페로망간,40,08:30,최지영,정상
RL-2024-005,2024-01-19,Pure_Fe,순철,100,07:45,정수민,정상`;
        
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '원부자재_장입_데이터.csv';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert('원부자재 장입 데이터가 CSV 파일로 다운로드되었습니다.');
    };

    // 창고 서브 메뉴 클릭 시 Google Sheets 데이터 fetch 및 테이블 렌더링
    function renderWarehouseTable(type) {
        const SHEET_ID = '1SmLig4wK_uMcIUBMBigQ4JuyV7v0cHOsuCT8J5e4sWA';
        const SHEET_NAME = 'Sheet1'; // 필요시 시트명 변경
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
        const contentDiv = document.getElementById('dynamic-content-area');
        if (!contentDiv) return;

        // 검색/페이지네이션 상태
        let allRows = [];
        let filteredRows = [];
        let currentPage = 1;
        const itemsPerPage = 10;
        let fromDate = '';
        let toDate = '';
        let dateColIdx = 0; // 날짜 컬럼 인덱스(자동 감지)
        let typeColIdx = 0; // 타입 컬럼 인덱스(자동 감지)

        // 날짜 포맷 YYYY-MM-DD
        function formatDate(date) {
            if (!date) return '';
            const d = new Date(date);
            return d.toISOString().split('T')[0];
        }

        // CSV 파싱
        function parseCSV(csv) {
            const lines = csv.split('\n').filter(Boolean);
            return lines.map(line => line.split(','));
        }

        // 필터링
        function filterRows() {
            // robust 컬럼 인덱스 매핑
            const normalize = s => (s || '').replace(/^\uFEFF/, '').replace(/\s+/g, '').toLowerCase();
            const header = allRows[0] || [];
            const colIdx = name => header.findIndex(h => normalize(h) === normalize(name));
            const idx = {
                로트번호: colIdx('로트번호'),
                입고일: colIdx('입고일'),
                가공완료일: colIdx('가공완료일'),
                최종검사일: colIdx('최종검사일'),
                선급검사일: colIdx('선급검사일'),
                출하일: colIdx('출하일')
            };
            filteredRows = allRows.filter((row, i) => {
                if (i === 0) return false; // 헤더 제외
                // 기간 필터(입고일 기준)
                let dateOk = true;
                if (fromDate && toDate && idx.입고일 > -1) {
                    const rowDate = row[idx.입고일];
                    if (rowDate) {
                        const d = new Date(rowDate);
                        dateOk = d >= new Date(fromDate) && d <= new Date(toDate);
                    }
                }
                let menuOk = true;
                switch(type) {
                    case '입고 현황':
                        menuOk = row[idx.입고일];
                        break;
                    case '가공 대기':
                        menuOk = row[idx.입고일] && !row[idx.가공완료일];
                        break;
                    case '가공 완료':
                        menuOk = row[idx.가공완료일];
                        break;
                    case '최종 검사 대기':
                        menuOk = row[idx.가공완료일] && !row[idx.최종검사일];
                        break;
                    case '최종 검사 완료':
                        menuOk = row[idx.최종검사일];
                        break;
                    case '선급 검사 대기':
                        menuOk = row[idx.최종검사일] && !row[idx.선급검사일];
                        break;
                    case '출하 대기':
                        menuOk = row[idx.선급검사일] && !row[idx.출하일];
                        break;
                    default:
                        menuOk = true;
                }
                return dateOk && menuOk;
            });
        }

        // 테이블 렌더링
        function renderTable() {
            const startIdx = (currentPage - 1) * itemsPerPage;
            const endIdx = startIdx + itemsPerPage;
            const pageRows = filteredRows.slice(startIdx, endIdx);
            const header = allRows[0] || [];
            let html = `<div style='margin-bottom:16px; display:flex; gap:16px; align-items:center;'>
                <label>기간: <input type='date' id='fromDate' value='${fromDate}' style='margin-right:8px;'></label>
                <span>~</span>
                <input type='date' id='toDate' value='${toDate}' style='margin-left:8px; margin-right:16px;'>
                <button id='searchBtn' style='padding:6px 16px; background:#2196f3; color:white; border:none; border-radius:4px; cursor:pointer;'>검색</button>
            </div>`;
            html += `<div style='overflow-x:auto;'><table style='width:100%; border-collapse:collapse; border:1px solid #ddd;'>`;
            html += '<thead><tr>' + header.map(h => `<th style='border:1px solid #ddd; padding:8px; background:#f5f5f5;'>${h}</th>`).join('') + '</tr></thead>';
            html += '<tbody>';
            if (pageRows.length === 0) {
                html += `<tr><td colspan='${header.length}' style='text-align:center; padding:24px;'>데이터가 없습니다.</td></tr>`;
            } else {
                pageRows.forEach(row => {
                    html += '<tr>' + row.map(cell => `<td style='border:1px solid #ddd; padding:8px;'>${cell}</td>`).join('') + '</tr>';
                });
            }
            html += '</tbody></table></div>';
            // 페이지네이션
            const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
            html += `<div style='margin-top:16px; text-align:center;'>`;
            if (currentPage > 1) html += `<button id='prevPageBtn' style='margin:0 8px;'>이전</button>`;
            html += `<span> ${currentPage} / ${totalPages || 1} </span>`;
            if (currentPage < totalPages) html += `<button id='nextPageBtn' style='margin:0 8px;'>다음</button>`;
            html += `</div>`;
            contentDiv.innerHTML = html;

            // 이벤트 바인딩
            document.getElementById('searchBtn').onclick = () => {
                fromDate = document.getElementById('fromDate').value;
                toDate = document.getElementById('toDate').value;
                currentPage = 1;
                filterRows();
                renderTable();
            };
            if (document.getElementById('prevPageBtn')) {
                document.getElementById('prevPageBtn').onclick = () => {
                    currentPage--;
                    renderTable();
                };
            }
            if (document.getElementById('nextPageBtn')) {
                document.getElementById('nextPageBtn').onclick = () => {
                    currentPage++;
                    renderTable();
                };
            }
        }

        // 데이터 fetch 및 초기화
        fetch(url)
            .then(res => res.text())
            .then(csv => {
                allRows = parseCSV(csv);
                // 날짜/타입 컬럼 인덱스 자동 감지
                const header = allRows[0] || [];
                dateColIdx = header.findIndex(h => h.includes('일자') || h.toLowerCase().includes('date'));
                typeColIdx = header.findIndex(h => h.includes('상태') || h.includes('구분') || h.toLowerCase().includes('type'));
                fromDate = '';
                toDate = '';
                filterRows();
                renderTable();
            });
    }

    // 창고 서브 메뉴 클릭 이벤트 바인딩
    document.addEventListener('click', function(e) {
        const subMenu = e.target.closest('.sub-menu-banner');
        if (subMenu && subMenu.getAttribute('data-sub-menu')) {
            // 창고 메뉴가 활성화된 경우에만 동작
            const modal = document.getElementById('myModal');
            const modalTitle = modal ? modal.querySelector('h3') : null;
            if (modalTitle && modalTitle.textContent.trim().startsWith('창고 메뉴')) {
                e.stopPropagation(); // 모달 닫힘 방지
                const type = subMenu.getAttribute('data-sub-menu');
                setTimeout(() => renderWarehouseTable(type), 0); // DOM 업데이트 후 안전하게 렌더링
                return;
            }
        }
    }, true); // 캡처 단계에서 이벤트 처리

    // 재공재고 데이터 보기 함수
    window.viewWipInventoryData = function() {
        const SHEET_ID = '1SmLig4wK_uMcIUBMBigQ4JuyV7v0cHOsuCT8J5e4sWA'; // 실제 gsheet ID로 교체 필요
        const SHEET_NAME = 'Sheet1'; // 필요시 시트명 변경
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
        const contentDiv = document.getElementById('dynamic-content-area');
        if (!contentDiv) return;

        contentDiv.innerHTML = '<div style="text-align:center; padding:40px;">데이터를 불러오는 중입니다...</div>';

        fetch(url)
            .then(res => res.text())
            .then(csv => {
                const lines = csv.split('\n').filter(Boolean);
                const rows = lines.map(line => line.split(','));
                let html = '<div class="file-viewer">';
                html += '<h6><i class="fas fa-table"></i> 재공재고 데이터</h6>';
                html += '<div class="data-table-container" style="margin-top: 20px; overflow-x: auto;">';
                html += '<table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">';
                html += '<thead><tr>' + rows[0].map(h => `<th style='border:1px solid #ddd; padding:8px; background:#f5f5f5;'>${h}</th>`).join('') + '</tr></thead>';
                html += '<tbody>';
                if (rows.length <= 1) {
                    html += `<tr><td colspan='${rows[0].length}' style='text-align:center; padding:24px;'>데이터가 없습니다.</td></tr>`;
                } else {
                    for (let i = 1; i < rows.length; i++) {
                        html += '<tr>' + rows[i].map(cell => `<td style='border:1px solid #ddd; padding:8px;'>${cell}</td>`).join('') + '</tr>';
                    }
                }
                html += '</tbody></table></div></div>';
                contentDiv.innerHTML = html;
            })
            .catch(() => {
                contentDiv.innerHTML = '<div style="text-align:center; padding:40px; color:red;">데이터를 불러오지 못했습니다.</div>';
            });
    };

    // 출하 메뉴 동적 입력 기능 추가
    // 모달이 열릴 때마다 아래 이벤트 바인딩
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest('#addShipmentItemBtn')) {
            const lot = document.getElementById('lotNumberInput').value.trim();
            const quantity = document.getElementById('quantityInput').value.trim();
            if (!lot || !quantity) {
                alert('로트번호와 수량을 모두 입력하세요.');
                return;
            }
            window._shipmentItems = window._shipmentItems || [];
            window._shipmentItems.push({ lot, quantity });
            renderShipmentItemsList();
            document.getElementById('lotNumberInput').value = '';
            document.getElementById('quantityInput').value = '1';
        }
        if (e.target && e.target.closest('.remove-shipment-item')) {
            const idx = parseInt(e.target.getAttribute('data-idx'));
            if (!isNaN(idx)) {
                window._shipmentItems.splice(idx, 1);
                renderShipmentItemsList();
            }
        }
        if (e.target && e.target.closest('#completeShipmentBtn')) {
            const datetime = document.getElementById('shipmentDatetime').value;
            const vehicle = document.getElementById('vehicleNumber').value.trim();
            if (!datetime || !vehicle) {
                alert('출하 일시와 차량 번호를 입력하세요.');
                return;
            }
            if (!window._shipmentItems || window._shipmentItems.length === 0) {
                alert('출하 품목을 1개 이상 추가하세요.');
                return;
            }
            let html = `<h4>출하 리스트</h4><div><b>출하 일시:</b> ${datetime} <b>차량 번호:</b> ${vehicle}</div>`;
            html += '<table style="width:100%; border-collapse:collapse; margin-top:12px; border:1px solid #ddd;"><thead><tr style="background:#f5f5f5;"><th style="border:1px solid #ddd; padding:8px;">로트번호</th><th style="border:1px solid #ddd; padding:8px;">수량</th></tr></thead><tbody>';
            window._shipmentItems.forEach(item => {
                html += `<tr><td style='border:1px solid #ddd; padding:8px;'>${item.lot}</td><td style='border:1px solid #ddd; padding:8px;'>${item.quantity}</td></tr>`;
            });
            html += '</tbody></table>';
            document.getElementById('shipmentResult').innerHTML = html;
            window._shipmentItems = [];
            renderShipmentItemsList();
        }
    }, true);
    function renderShipmentItemsList() {
        const listDiv = document.getElementById('shipmentItemsList');
        if (!listDiv) return;
        const items = window._shipmentItems || [];
        if (items.length === 0) {
            listDiv.innerHTML = '<div style="color:#888;">추가된 품목이 없습니다.</div>';
            return;
        }
        let html = '<table style="width:auto; border-collapse:collapse; margin-top:4px; border:1px solid #ddd;"><thead><tr style="background:#f5f5f5;"><th style="border:1px solid #ddd; padding:6px;">로트번호</th><th style="border:1px solid #ddd; padding:6px;">수량</th><th style="border:1px solid #ddd; padding:6px;">삭제</th></tr></thead><tbody>';
        items.forEach((item, idx) => {
            html += `<tr><td style='border:1px solid #ddd; padding:6px;'>${item.lot}</td><td style='border:1px solid #ddd; padding:6px;'>${item.quantity}</td><td style='border:1px solid #ddd; padding:6px; text-align:center;'><button class='remove-shipment-item' data-idx='${idx}' style='color:#fff; background:#f44336; border:none; border-radius:3px; padding:2px 8px; cursor:pointer;'>삭제</button></td></tr>`;
        });
        html += '</tbody></table>';
        listDiv.innerHTML = html;
    }

    // 가공 데이터 샘플 (실제 데이터로 교체 가능)
    const machiningData = [
        {입고일: '2024-06-01', 로트번호: 'LOT001', 수량: 10, 기종: 'S26MC', 중량: 474, 가공완료: 'Y'},
        {입고일: '2024-06-02', 로트번호: 'LOT002', 수량: 8, 기종: 'DL28', 중량: 320, 가공완료: 'N'},
        {입고일: '2024-06-03', 로트번호: 'LOT003', 수량: 12, 기종: 'LUN28', 중량: 332, 가공완료: 'Y'},
        {입고일: '2024-06-04', 로트번호: 'LOT004', 수량: 7, 기종: 'EL30', 중량: 500, 가공완료: 'N'},
        {입고일: '2024-06-05', 로트번호: 'LOT005', 수량: 15, 기종: 'S28MC', 중량: 485, 가공완료: 'Y'},
        {입고일: '2024-06-06', 로트번호: 'LOT006', 수량: 9, 기종: 'DL30', 중량: 335, 가공완료: 'N'},
        {입고일: '2024-06-07', 로트번호: 'LOT007', 수량: 11, 기종: 'LUN30', 중량: 345, 가공완료: 'Y'},
        {입고일: '2024-06-08', 로트번호: 'LOT008', 수량: 13, 기종: 'EL32', 중량: 515, 가공완료: 'N'},
        {입고일: '2024-06-09', 로트번호: 'LOT009', 수량: 14, 기종: 'S30MC', 중량: 495, 가공완료: 'Y'},
        {입고일: '2024-06-10', 로트번호: 'LOT010', 수량: 6, 기종: 'DL32', 중량: 350, 가공완료: 'N'},
        // ... 더 많은 데이터 추가 가능
    ];
    let machiningCurrentPage = 1;
    const machiningItemsPerPage = 5;

    function renderMachiningTable(page) {
        const startIdx = (page - 1) * machiningItemsPerPage;
        const endIdx = startIdx + machiningItemsPerPage;
        const pageData = machiningData.slice(startIdx, endIdx);
        let html = '<table style="width:100%; border-collapse:collapse; border:1px solid #ddd; min-width:800px;">';
        html += '<thead><tr style="background:#f5f5f5;">';
        html += '<th style="border:1px solid #ddd; padding:8px;">입고일</th>';
        html += '<th style="border:1px solid #ddd; padding:8px;">로트번호</th>';
        html += '<th style="border:1px solid #ddd; padding:8px;">수량</th>';
        html += '<th style="border:1px solid #ddd; padding:8px;">기종</th>';
        html += '<th style="border:1px solid #ddd; padding:8px;">중량(kg)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px;">가공 완료 여부(Y/N)</th>';
        html += '</tr></thead><tbody>';
        if (pageData.length === 0) {
            html += `<tr><td colspan="6" style="text-align:center; padding:24px; color:#888;">데이터가 없습니다.</td></tr>`;
        } else {
            pageData.forEach(row => {
                html += `<tr>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.입고일}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.로트번호}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.수량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.기종}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.중량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px;'>${row.가공완료}</td>`;
                html += `</tr>`;
            });
        }
        html += '</tbody></table>';
        document.getElementById('machiningTableContainer').innerHTML = html;
    }

    function renderMachiningPagination() {
        const totalPages = Math.ceil(machiningData.length / machiningItemsPerPage);
        let html = '';
        if (machiningCurrentPage > 1) {
            html += `<button onclick="changeMachiningPage(${machiningCurrentPage - 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">이전</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === machiningCurrentPage) {
                html += `<button style="background:#4caf50; color:white; padding:8px 15px; border:none; border-radius:4px; margin:0 5px; font-weight:bold;">${i}</button>`;
            } else {
                html += `<button onclick="changeMachiningPage(${i})" style="background:#f0f0f0; color:#333; padding:8px 15px; border:1px solid #ddd; border-radius:4px; cursor:pointer; margin:0 5px;">${i}</button>`;
            }
        }
        if (machiningCurrentPage < totalPages) {
            html += `<button onclick="changeMachiningPage(${machiningCurrentPage + 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">다음</button>`;
        }
        document.getElementById('machiningPagination').innerHTML = html;
    }

    window.changeMachiningPage = function(page) {
        machiningCurrentPage = page;
        renderMachiningTable(machiningCurrentPage);
        renderMachiningPagination();
    };

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'downloadMachiningCSV') {
            let csv = '입고일,로트번호,수량,기종,중량(kg),가공 완료 여부(Y/N)\n';
            machiningData.forEach(row => {
                csv += `${row.입고일},${row.로트번호},${row.수량},${row.기종},${row.중량},${row.가공완료}\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = '가공_현황_리스트.csv';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, true);

    // 가공 메뉴가 열릴 때 테이블 렌더링
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest('.dashboard-button')) {
            const btn = e.target.closest('.dashboard-button');
            const btnText = btn.querySelector('p').textContent;
            if (btnText === '가공') {
                setTimeout(() => {
                    machiningCurrentPage = 1;
                    renderMachiningTable(machiningCurrentPage);
                    renderMachiningPagination();
                }, 100);
            }
        }
    }, true);

    // 검사 데이터 샘플 (실제 데이터로 교체 가능)
    const inspectionData = [
        {입고일: '2024-06-01', 로트번호: 'LOT001', 수량: 10, 기종: 'S26MC', 중량: 474, 가공완료: 'Y', 검사완료: 'Y'},
        {입고일: '2024-06-02', 로트번호: 'LOT002', 수량: 8, 기종: 'DL28', 중량: 320, 가공완료: 'N', 검사완료: 'N'},
        {입고일: '2024-06-03', 로트번호: 'LOT003', 수량: 12, 기종: 'LUN28', 중량: 332, 가공완료: 'Y', 검사완료: 'Y'},
        {입고일: '2024-06-04', 로트번호: 'LOT004', 수량: 7, 기종: 'EL30', 중량: 500, 가공완료: 'N', 검사완료: 'N'},
        {입고일: '2024-06-05', 로트번호: 'LOT005', 수량: 15, 기종: 'S28MC', 중량: 485, 가공완료: 'Y', 검사완료: 'Y'},
        {입고일: '2024-06-06', 로트번호: 'LOT006', 수량: 9, 기종: 'DL30', 중량: 335, 가공완료: 'N', 검사완료: 'N'},
        {입고일: '2024-06-07', 로트번호: 'LOT007', 수량: 11, 기종: 'LUN30', 중량: 345, 가공완료: 'Y', 검사완료: 'Y'},
        {입고일: '2024-06-08', 로트번호: 'LOT008', 수량: 13, 기종: 'EL32', 중량: 515, 가공완료: 'N', 검사완료: 'N'},
        {입고일: '2024-06-09', 로트번호: 'LOT009', 수량: 14, 기종: 'S30MC', 중량: 495, 가공완료: 'Y', 검사완료: 'Y'},
        {입고일: '2024-06-10', 로트번호: 'LOT010', 수량: 6, 기종: 'DL32', 중량: 350, 가공완료: 'N', 검사완료: 'N'},
        // ... 더 많은 데이터 추가 가능
    ];
    let inspectionCurrentPage = 1;
    const inspectionItemsPerPage = 5;

    function renderInspectionTable(page) {
        const startIdx = (page - 1) * inspectionItemsPerPage;
        const endIdx = startIdx + inspectionItemsPerPage;
        const pageData = inspectionData.slice(startIdx, endIdx);
        let html = '<table style="width:50%; border-collapse:collapse; border:1px solid #ddd; min-width:420px;">';
        html += '<thead><tr style="background:#f5f5f5;">';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">입고일</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">로트번호</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">수량</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">기종</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">중량(kg)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">가공 완료 여부(Y/N)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">검사 완료 여부(Y/N)</th>';
        html += '</tr></thead><tbody>';
        if (pageData.length === 0) {
            html += `<tr><td colspan="7" style="text-align:center; padding:24px; color:#888;">데이터가 없습니다.</td></tr>`;
        } else {
            pageData.forEach(row => {
                html += `<tr>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.입고일}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.로트번호}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.수량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.기종}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.중량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.가공완료}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.검사완료}</td>`;
                html += `</tr>`;
            });
        }
        html += '</tbody></table>';
        document.getElementById('inspectionTableContainer').innerHTML = html;
    }

    function renderInspectionPagination() {
        const totalPages = Math.ceil(inspectionData.length / inspectionItemsPerPage);
        let html = '';
        if (inspectionCurrentPage > 1) {
            html += `<button onclick="changeInspectionPage(${inspectionCurrentPage - 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">이전</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === inspectionCurrentPage) {
                html += `<button style="background:#4caf50; color:white; padding:8px 15px; border:none; border-radius:4px; margin:0 5px; font-weight:bold;">${i}</button>`;
            } else {
                html += `<button onclick="changeInspectionPage(${i})" style="background:#f0f0f0; color:#333; padding:8px 15px; border:1px solid #ddd; border-radius:4px; cursor:pointer; margin:0 5px;">${i}</button>`;
            }
        }
        if (inspectionCurrentPage < totalPages) {
            html += `<button onclick="changeInspectionPage(${inspectionCurrentPage + 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">다음</button>`;
        }
        document.getElementById('inspectionPagination').innerHTML = html;
    }

    window.changeInspectionPage = function(page) {
        inspectionCurrentPage = page;
        renderInspectionTable(inspectionCurrentPage);
        renderInspectionPagination();
    };

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'downloadInspectionCSV') {
            let csv = '입고일,로트번호,수량,기종,중량(kg),가공 완료 여부(Y/N),검사 완료 여부(Y/N)\n';
            inspectionData.forEach(row => {
                csv += `${row.입고일},${row.로트번호},${row.수량},${row.기종},${row.중량},${row.가공완료},${row.검사완료}\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = '검사_현황_리스트.csv';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, true);

    // 검사 메뉴가 열릴 때 테이블 렌더링
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest('.dashboard-button')) {
            const btn = e.target.closest('.dashboard-button');
            const btnText = btn.querySelector('p').textContent;
            if (btnText === '검사') {
                setTimeout(() => {
                    inspectionCurrentPage = 1;
                    renderInspectionTable(inspectionCurrentPage);
                    renderInspectionPagination();
                }, 100);
            }
        }
    }, true);

    // 창고 데이터 샘플 (실제 데이터로 교체 가능)
    const warehouseData = [
        {입고일: '2024-06-01', 로트번호: 'LOT001', 수량: 10, 기종: 'S26MC', 중량: 474, 가공완료: 'Y', 검사완료: 'Y', 출하일자: '2024-06-10', 출하수량: 10, 출하완료: 'Y'},
        {입고일: '2024-06-02', 로트번호: 'LOT002', 수량: 8, 기종: 'DL28', 중량: 320, 가공완료: 'N', 검사완료: 'N', 출하일자: '', 출하수량: '', 출하완료: 'N'},
        {입고일: '2024-06-03', 로트번호: 'LOT003', 수량: 12, 기종: 'LUN28', 중량: 332, 가공완료: 'Y', 검사완료: 'Y', 출하일자: '2024-06-12', 출하수량: 12, 출하완료: 'Y'},
        {입고일: '2024-06-04', 로트번호: 'LOT004', 수량: 7, 기종: 'EL30', 중량: 500, 가공완료: 'N', 검사완료: 'N', 출하일자: '', 출하수량: '', 출하완료: 'N'},
        {입고일: '2024-06-05', 로트번호: 'LOT005', 수량: 15, 기종: 'S28MC', 중량: 485, 가공완료: 'Y', 검사완료: 'Y', 출하일자: '2024-06-15', 출하수량: 15, 출하완료: 'Y'},
        // ... 더 많은 데이터 추가 가능
    ];
    let warehouseCurrentPage = 1;
    const warehouseItemsPerPage = 5;

    function renderWarehouseTable(page) {
        const startIdx = (page - 1) * warehouseItemsPerPage;
        const endIdx = startIdx + warehouseItemsPerPage;
        const pageData = warehouseData.slice(startIdx, endIdx);
        let html = '<table style="width:50%; border-collapse:collapse; border:1px solid #ddd; min-width:420px;">';
        html += '<thead><tr style="background:#f5f5f5;">';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">입고일</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">로트번호</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">수량</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">기종</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">중량(kg)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">가공 완료 여부(Y/N)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">검사 완료 여부(Y/N)</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">출하일자</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">출하 수량</th>';
        html += '<th style="border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;">출하 완료 여부(Y/N)</th>';
        html += '</tr></thead><tbody>';
        if (pageData.length === 0) {
            html += `<tr><td colspan="10" style="text-align:center; padding:24px; color:#888;">데이터가 없습니다.</td></tr>`;
        } else {
            pageData.forEach(row => {
                html += `<tr>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.입고일}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.로트번호}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.수량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.기종}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.중량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.가공완료}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.검사완료}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.출하일자}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.출하수량}</td>`;
                html += `<td style='border:1px solid #ddd; padding:8px; width:3%; min-width:30px; max-width:60px;'>${row.출하완료}</td>`;
                html += `</tr>`;
            });
        }
        html += '</tbody></table>';
        document.getElementById('warehouseTableContainer').innerHTML = html;
    }

    function renderWarehousePagination() {
        const totalPages = Math.ceil(warehouseData.length / warehouseItemsPerPage);
        let html = '';
        if (warehouseCurrentPage > 1) {
            html += `<button onclick="changeWarehousePage(${warehouseCurrentPage - 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">이전</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            if (i === warehouseCurrentPage) {
                html += `<button style="background:#4caf50; color:white; padding:8px 15px; border:none; border-radius:4px; margin:0 5px; font-weight:bold;">${i}</button>`;
            } else {
                html += `<button onclick="changeWarehousePage(${i})" style="background:#f0f0f0; color:#333; padding:8px 15px; border:1px solid #ddd; border-radius:4px; cursor:pointer; margin:0 5px;">${i}</button>`;
            }
        }
        if (warehouseCurrentPage < totalPages) {
            html += `<button onclick="changeWarehousePage(${warehouseCurrentPage + 1})" style="background:#2196f3; color:white; padding:8px 15px; border:none; border-radius:4px; cursor:pointer; margin:0 5px;">다음</button>`;
        }
        document.getElementById('warehousePagination').innerHTML = html;
    }

    window.changeWarehousePage = function(page) {
        warehouseCurrentPage = page;
        renderWarehouseTable(warehouseCurrentPage);
        renderWarehousePagination();
    };

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'downloadWarehouseCSV') {
            let csv = '입고일,로트번호,수량,기종,중량(kg),가공 완료 여부(Y/N),검사 완료 여부(Y/N),출하일자,출하 수량,출하 완료 여부(Y/N)\n';
            warehouseData.forEach(row => {
                csv += `${row.입고일},${row.로트번호},${row.수량},${row.기종},${row.중량},${row.가공완료},${row.검사완료},${row.출하일자},${row.출하수량},${row.출하완료}\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = '창고_현황_리스트.csv';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, true);

    // 창고 메뉴가 열릴 때 테이블 렌더링
    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest('.dashboard-button')) {
            const btn = e.target.closest('.dashboard-button');
            const btnText = btn.querySelector('p').textContent;
            if (btnText === '창고') {
                setTimeout(() => {
                    warehouseCurrentPage = 1;
                    renderWarehouseTable(warehouseCurrentPage);
                    renderWarehousePagination();
                }, 100);
            }
        }
    }, true);

    // 원료투입량 계산기': `<h4>원료투입량 계산기</h4><iframe src="원료투입량 계산기/index.html" style="width:100%;height:700px;border:none;"></iframe>`,
}); 