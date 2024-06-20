// AccordionMenuPanel.tsx

// React와 MUI(Material-UI) 컴포넌트 import
import * as React from 'react'; // React 라이브러리 전체를 가져옴
import {Accordion} from '@mui/material';  // MUI의 Accordion 컴포넌트를 가져옴

// 커스텀 컴포넌트와 타입 import
import AccordionMenu, {AccordionMenuProps} from "@/components/atoms/AccordionMenu/AccordionMenu"; // AccordionMenu 컴포넌트와 그 Props 타입을 가져옴
import AccordionTitle, {AccordionTitleProps} from "@/components/atoms/AccordionTitle/AccordionTitle"; // AccordionTitle 컴포넌트와 그 Props 타입을 가져옴
// 프로젝트 내 색상 상수 파일 import
import COLORS from "@/styles/colors"; // 색상 관련 상수들을 가져옴

// AccordionMenuPanel 컴포넌트의 Props 타입 정의
export type AccordionMenuPanelProps = {
    AccordionMenuTitle: AccordionTitleProps; // 아코디언 타이틀의 Props
    AccordionMenuItemList: AccordionMenuProps; // 아코디언 메뉴 아이템 리스트의 Props
}

// AccordionMenuPanel 컴포넌트 정의
const AccordionMenuPanel = ({AccordionMenuItemList, AccordionMenuTitle}: AccordionMenuPanelProps) => {
    // 확장된 아코디언의 스타일 정의
    const expandedStyled = {
        backgroundColor: COLORS.ghtjr01, // 배경 색상 설정
        color: COLORS.TEXT.ghtjr00, // 텍스트 색상 설정
        '&.Mui-expanded': { // 아코디언이 확장되었을 때의 스타일
            margin: 0,  // 마진 제거
            backgroundColor:COLORS.ghtjr01 // 배경 색상 설정
            // ?? 이건뭐지
        },
    }

    return (
        // 아코디언 컴포넌트 반환
        <Accordion sx={expandedStyled}>
             {/* 아코디언 타이틀 컴포넌트 */}
            <AccordionTitle {...AccordionMenuTitle} />
            {/* 아코디언 메뉴 컴포넌트 */}
            <AccordionMenu {...AccordionMenuItemList} />
        </Accordion>
    );
}
// AccordionMenuPanel 컴포넌트 내보내기
export default AccordionMenuPanel;
