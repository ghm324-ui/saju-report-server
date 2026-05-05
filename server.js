const express = require('express');
const app = express();
app.use(express.json({ limit: '10mb' }));

app.post('/generate', async (req, res) => {
  try {
    const data = req.body;
    let html = getTemplate();

    // 기본 정보
    html = html.replace(/{{BIRTH_DATE}}/g, data.birth_date || '');
    html = html.replace(/{{BIRTH_TIME}}/g, data.birth_time || '');
    html = html.replace(/{{BIRTH_PLACE}}/g, data.birth_place || '');
    html = html.replace(/{{GENDER}}/g, data.gender || '');
    html = html.replace(/{{ILJU}}/g, data.ilju || '');
    html = html.replace(/{{YONGSIN}}/g, data.yongsin || '');

    // 사주팔자
    html = html.replace(/{{HOUR_H}}/g, data.hour_h || '');
    html = html.replace(/{{HOUR_H_ELEMENT}}/g, data.hour_h_element || '');
    html = html.replace(/{{HOUR_H_CLASS}}/g, data.hour_h_class || '');
    html = html.replace(/{{DAY_H}}/g, data.day_h || '');
    html = html.replace(/{{DAY_H_ELEMENT}}/g, data.day_h_element || '');
    html = html.replace(/{{DAY_H_CLASS}}/g, data.day_h_class || '');
    html = html.replace(/{{MONTH_H}}/g, data.month_h || '');
    html = html.replace(/{{MONTH_H_ELEMENT}}/g, data.month_h_element || '');
    html = html.replace(/{{MONTH_H_CLASS}}/g, data.month_h_class || '');
    html = html.replace(/{{YEAR_H}}/g, data.year_h || '');
    html = html.replace(/{{YEAR_H_ELEMENT}}/g, data.year_h_element || '');
    html = html.replace(/{{YEAR_H_CLASS}}/g, data.year_h_class || '');

    html = html.replace(/{{HOUR_E}}/g, data.hour_e || '');
    html = html.replace(/{{HOUR_E_ELEMENT}}/g, data.hour_e_element || '');
    html = html.replace(/{{HOUR_E_CLASS}}/g, data.hour_e_class || '');
    html = html.replace(/{{DAY_E}}/g, data.day_e || '');
    html = html.replace(/{{DAY_E_ELEMENT}}/g, data.day_e_element || '');
    html = html.replace(/{{DAY_E_CLASS}}/g, data.day_e_class || '');
    html = html.replace(/{{MONTH_E}}/g, data.month_e || '');
    html = html.replace(/{{MONTH_E_ELEMENT}}/g, data.month_e_element || '');
    html = html.replace(/{{MONTH_E_CLASS}}/g, data.month_e_class || '');
    html = html.replace(/{{YEAR_E}}/g, data.year_e || '');
    html = html.replace(/{{YEAR_E_ELEMENT}}/g, data.year_e_element || '');
    html = html.replace(/{{YEAR_E_CLASS}}/g, data.year_e_class || '');

    // 오행
    html = html.replace(/{{WOOD_RATIO}}/g, data.wood_ratio || '0');
    html = html.replace(/{{WOOD_COUNT}}/g, data.wood_count || '0');
    html = html.replace(/{{FIRE_RATIO}}/g, data.fire_ratio || '0');
    html = html.replace(/{{FIRE_COUNT}}/g, data.fire_count || '0');
    html = html.replace(/{{EARTH_RATIO}}/g, data.earth_ratio || '0');
    html = html.replace(/{{EARTH_COUNT}}/g, data.earth_count || '0');
    html = html.replace(/{{METAL_RATIO}}/g, data.metal_ratio || '0');
    html = html.replace(/{{METAL_COUNT}}/g, data.metal_count || '0');
    html = html.replace(/{{WATER_RATIO}}/g, data.water_ratio || '0');
    html = html.replace(/{{WATER_COUNT}}/g, data.water_count || '0');

    // 본질
    html = html.replace(/{{ESSENCE_HEADLINE}}/g, (data.essence_headline || '').replace(/\n/g, '<br>'));
    html = html.replace(/{{ESSENCE_1}}/g, data.essence_1 || '');
    html = html.replace(/{{ESSENCE_2}}/g, data.essence_2 || '');
    html = html.replace(/{{ESSENCE_3}}/g, data.essence_3 || '');

    // 키워드
    html = html.replace(/{{KEYWORD_1}}/g, data.keyword_1 || '');
    html = html.replace(/{{KEYWORD_2}}/g, data.keyword_2 || '');
    html = html.replace(/{{KEYWORD_3}}/g, data.keyword_3 || '');
    html = html.replace(/{{KEYWORD_4}}/g, data.keyword_4 || '');
    html = html.replace(/{{KEYWORD_5}}/g, data.keyword_5 || '');
    html = html.replace(/{{KEYWORD_6}}/g, data.keyword_6 || '');

    // 성격
    html = html.replace(/{{PERSONALITY_1}}/g, data.personality_1 || '');
    html = html.replace(/{{PERSONALITY_2}}/g, data.personality_2 || '');
    html = html.replace(/{{PERSONALITY_3}}/g, data.personality_3 || '');
    html = html.replace(/{{PERSONALITY_4}}/g, data.personality_4 || '');
    html = html.replace(/{{PERSONALITY_SUMMARY}}/g, data.personality_summary || '');

    // 재능
    html = html.replace(/{{TALENT_1}}/g, data.talent_1 || '');
    html = html.replace(/{{TALENT_2}}/g, data.talent_2 || '');
    html = html.replace(/{{TALENT_3}}/g, data.talent_3 || '');
    html = html.replace(/{{TALENT_4}}/g, data.talent_4 || '');
    html = html.replace(/{{TALENT_SUMMARY}}/g, data.talent_summary || '');

    // 과제
    html = html.replace(/{{CAUTION_1}}/g, data.caution_1 || '');
    html = html.replace(/{{CAUTION_2}}/g, data.caution_2 || '');
    html = html.replace(/{{CAUTION_3}}/g, data.caution_3 || '');
    html = html.replace(/{{CAUTION_4}}/g, data.caution_4 || '');
    html = html.replace(/{{CAUTION_SUMMARY}}/g, data.caution_summary || '');

    // 지금
    html = html.replace(/{{NOW_1}}/g, data.now_1 || '');
    html = html.replace(/{{NOW_2}}/g, data.now_2 || '');
    html = html.replace(/{{NOW_3}}/g, data.now_3 || '');
    html = html.replace(/{{NOW_4}}/g, data.now_4 || '');
    html = html.replace(/{{NOW_SUMMARY}}/g, data.now_summary || '');

    // 직업
    html = html.replace(/{{WORK_JOBS}}/g, data.work_jobs || '');
    html = html.replace(/{{WORK_MONEY}}/g, data.work_money || '');
    html = html.replace(/{{WORK_CAUTION}}/g, data.work_caution || '');
    html = html.replace(/{{WORK_GROWTH}}/g, data.work_growth || '');
    html = html.replace(/{{WORK_SUMMARY}}/g, data.work_summary || '');

    // 연애
    html = html.replace(/{{LOVE_1}}/g, data.love_1 || '');
    html = html.replace(/{{LOVE_2}}/g, data.love_2 || '');
    html = html.replace(/{{LOVE_3}}/g, data.love_3 || '');
    html = html.replace(/{{LOVE_4}}/g, data.love_4 || '');
    html = html.replace(/{{LOVE_5}}/g, data.love_5 || '');
    html = html.replace(/{{LOVE_SUMMARY}}/g, data.love_summary || '');

    // 대운
    html = html.replace(/{{DW1_AGE}}/g, data.dw1_age || '');
    html = html.replace(/{{DW1_NAME}}/g, data.dw1_name || '');
    html = html.replace(/{{DW1_PHASE}}/g, data.dw1_phase || '');
    html = html.replace(/{{DW2_AGE}}/g, data.dw2_age || '');
    html = html.replace(/{{DW2_NAME}}/g, data.dw2_name || '');
    html = html.replace(/{{DW2_PHASE}}/g, data.dw2_phase || '');
    html = html.replace(/{{DW3_AGE}}/g, data.dw3_age || '');
    html = html.replace(/{{DW3_NAME}}/g, data.dw3_name || '');
    html = html.replace(/{{DW4_AGE}}/g, data.dw4_age || '');
    html = html.replace(/{{DW4_NAME}}/g, data.dw4_name || '');
    html = html.replace(/{{DW4_PHASE}}/g, data.dw4_phase || '');
    html = html.replace(/{{DW5_AGE}}/g, data.dw5_age || '');
    html = html.replace(/{{DW5_NAME}}/g, data.dw5_name || '');
    html = html.replace(/{{DW5_PHASE}}/g, data.dw5_phase || '');
    html = html.replace(/{{DAEWOON_SUMMARY}}/g, data.daewoon_summary || '');

    // 메시지
    html = html.replace(/{{MESSAGE}}/g, (data.message || '').replace(/\n/g, '<br>'));

    res.send(html);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/', (req, res) => {
  res.send('사주 리포트 서버 작동 중 ✅');
});

function getTemplate() {
  // 여기에 saju-template-placeholders.html 전체 내용 붙여넣기
  return `PASTE_HTML_TEMPLATE_HERE`;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버 실행중 : ${PORT}`));
