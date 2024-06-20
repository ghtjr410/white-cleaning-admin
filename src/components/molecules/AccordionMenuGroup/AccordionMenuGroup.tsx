// AccordionMenuGroup.tsx
// React 및 필요한 모듈 import
import * as React from 'react'; // React 라이브러리 전체를 가져옴
import {ACCORDION_MENUS} from "@/constants/ACCORDION_MENUS"; // 아코디언 메뉴의 상수 데이터 가져오기
import AccordionMenuPanel from "@/components/molecules/AccordionMenuPanel/AccordionMenuPanel"; // AccordionMenuPanel 컴포넌트 가져오기

// AccordionMenuGroup 컴포넌트 정의
const AccordionMenuGroup = () => {
    return (
        <>
            {
                // ACCORDION_MENUS 배열을 순회하며 각 아이템에 대해 AccordionMenuPanel 컴포넌트를 생성
                ACCORDION_MENUS.map((v, k) => <AccordionMenuPanel key={k} {...v} />)
            }
        </>
    );
}
// AccordionMenuGroup 컴포넌트 내보내기
export default AccordionMenuGroup;
