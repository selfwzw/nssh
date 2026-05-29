/**
 * Local gallery data — replaces Wikipedia API calls with bundled zodiac content.
 * Each door in the lobby corresponds to one of the 12 Chinese zodiac animals.
 */

const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/'
const asset = (filename) =>
  baseUrl.endsWith('/') ? `${baseUrl}${filename}` : `${baseUrl}/${filename}`

const zodiac = [
  {
    label: '子鼠',
    animal: '鼠',
    image: '鼠.png',
    westExt: '.mp4',
    video: 'videos/子鼠.mp4',
    description: '子鼠(23:00-01:00)：\n子时是一天的开始，\n寓意新的希望和生机。\n此时老鼠胆量最壮，\n活动最频繁，\n所以与鼠对应，\n象征着生命力顽强、\n适应力强以及\n对新事物的探索精神。',
    longDescription:
      '鼠为十二生肖之首，对应地支"子"，五行属水，方位正北。在《山海经》的奇幻世界中，鼠形异兽多藏于地脉深穴，是大地灵气汇聚的象征。泥泥狗作为淮阳太昊陵的传统泥塑，以黑色为底、五彩勾线，传承千年。子鼠泥泥狗造型灵动，寓意生生不息、家业兴旺，是中国民间信仰与创世神话的鲜活载体。',
  },
  {
    label: '丑牛',
    animal: '牛',
    image: '牛.png',
    westExt: '.mp4',
    video: 'videos/丑牛.mp4',
    description: '丑牛(01:00-03:00)：\n丑时是夜间最深沉的时刻，\n寓意黑暗和沉寂。\n牛在此时吃足草进行"倒嚼"，\n为新一天的劳作养精蓄锐，\n象征着勤劳踏实、\n默默耕耘和坚韧不拔。',
    longDescription:
      '牛对应地支"丑"，五行属土，方位东北。在《山海经》中，牛形异兽常出没于崇山峻岭之间，是山岳的守护神灵。泥泥狗中的牛造型雄浑有力，以五彩纹样勾勒脊背与犄角，彰显力量之美。古人视牛为耕作之本、家国之基，丑牛泥泥狗承载着丰收与固守家园的朴素祈愿，是农耕文明的精神图腾。',
  },
  {
    label: '寅虎',
    animal: '虎',
    image: '虎.png',
    westExt: '.mp4',
    video: 'videos/寅虎.mp4',
    description: '寅虎(03:00-05:00)：\n寅时是天亮前的时刻，\n寓意黎明即将到来。\n老虎在这个时候最为活跃、凶猛，\n常传出虎啸声，\n象征着勇敢无畏、\n威严霸气和王者风范。',
    longDescription:
      '虎对应地支"寅"，五行属木，方位东北偏东。在《山海经》的神话图谱中，虎是镇守天门的神兽，威震四方、辟邪驱魔。泥泥狗中的虎造型威而不怒，五彩纹样勾勒出王字斑纹与炯炯双目，传递着庇佑家宅、护佑平安的民间信仰。寅虎泥泥狗是孩子们最爱的守护神，也是中国传统虎文化的鲜活延续。',
  },
  {
    label: '卯兔',
    animal: '兔',
    image: '兔.png',
    westExt: '.mp4',
    video: 'videos/卯兔.mp4',
    description: '卯兔(05:00-07:00)：\n卯时是早晨，\n寓意生机勃勃和活力充沛。\n太阳还没露出脸面，\n兔子开始出来觅食，\n象征着温和善良、\n敏捷机灵以及对生活的热爱。',
    longDescription:
      '兔对应地支"卯"，五行属木，方位正东。在中国神话中，玉兔捣药于月宫，嫦娥相伴，兔因此成为长生与团圆的象征。泥泥狗中的兔造型温润可人，长耳竖立、身躯圆融，五彩花纹如月华流淌。卯兔泥泥狗承载着人们对美好生活的向往，是吉祥如意、阖家团圆的民间艺术珍品。',
  },
  {
    label: '辰龙',
    animal: '龙',
    image: '龙.png',
    westExt: '.mp4',
    video: 'videos/辰龙.mp4',
    description: '辰龙(07:00-09:00)：\n辰时阳光明媚，朝气蓬勃。\n古人认为龙在此时施云布雨，\n所以与龙对应，\n象征着祥瑞、尊贵、权威\n和强大的力量，\n也代表着人们\n对美好生活的向往和追求。',
    longDescription:
      '龙对应地支"辰"，五行属土，方位东南。在《山海经》的浩瀚世界中，应龙、烛龙、夔龙等神兽腾跃于天地之间，是中华文明最核心的精神图腾。泥泥狗中的龙造型蜿蜒盘旋，五彩勾绘鳞甲生辉，龙头高昂、气势磅礴。辰龙泥泥狗凝聚了千年来华夏子民对龙的崇拜与想象，是创世神话与民间艺术完美交融的瑰宝。',
  },
  {
    label: '巳蛇',
    animal: '蛇',
    image: '蛇.png',
    westExt: '.png',
    video: 'videos/巳蛇.mp4',
    description: '巳蛇(09:00-11:00)：\n巳时太阳光热更强，\n蛇在这个时段活动频繁，\n寓意气势如虹和事业顺利。\n象征着神秘、智慧\n和灵活应变的能力。',
    longDescription:
      '蛇对应地支"巳"，五行属火，方位东南偏南。在《山海经》中，巴蛇吞象、九婴蛇身，蛇是远古先民敬畏的自然力量。泥泥狗中的蛇造型灵动蜿蜒，五彩纹样如鳞光闪烁，既有神秘的野性之美，又蕴含蜕皮新生的哲学意蕴。巳蛇泥泥狗以质朴的泥土之躯，诉说着古老文明对生命轮回的深刻理解。',
  },
  {
    label: '午马',
    animal: '马',
    image: '马.png',
    westExt: '.png',
    video: 'videos/午马.mp4',
    description: '午马(11:00-13:00)：\n午时太阳高悬，阳气旺盛，\n马的性格刚健，\n在此时也显得精力充沛，\n象征着热情奔放、\n勇往直前和积极向上的精神，\n代表着追求自由和梦想的力量。',
    longDescription:
      '马对应地支"午"，五行属火，方位正南。在《山海经》的奇幻版图中，天马、驳马等神骏奔驰于旷野云天，是速度与自由的象征。泥泥狗中的马造型昂首阔步，五彩线条勾勒出飘扬的鬃毛与矫健的四肢，充满动感与活力。午马泥泥狗承载着对远方与梦想的追逐，是中华民族进取精神的民间艺术表达。',
  },
  {
    label: '未羊',
    animal: '羊',
    image: '羊.png',
    westExt: '.png',
    video: 'videos/未羊.mp4',
    description: '未羊(13:00-15:00)：\n未时是下午的开端，\n寓意事业的成长和发展。\n羊在此时食欲旺盛，\n正在吃草，\n象征着温顺善良、\n平和安逸以及团结互助的品质。',
    longDescription:
      '羊对应地支"未"，五行属土，方位西南。在《山海经》中，羬羊、葱聋等异兽出没于水草丰美之地，是祥瑞与丰收的预兆。泥泥狗中的羊造型温顺端庄，五彩花纹如祥云缭绕，传递着温润和谐的气质。"羊"与"祥"同源，未羊泥泥狗承载着人们对和美生活、幸福安康的深深期许。',
  },
  {
    label: '申猴',
    animal: '猴',
    image: '猴.png',
    westExt: '.mp4',
    video: 'videos/申猴.mp4',
    description: '申猴(15:00-17:00)：\n申时太阳渐渐偏西，\n猴子们喜欢在树林里\n上蹿下跳，嬉戏玩耍，\n象征着聪明伶俐、\n活泼好动和充满创造力，\n代表着对世界的好奇\n和探索精神。',
    longDescription:
      '猴对应地支"申"，五行属金，方位西南偏西。在《山海经》中，猩猩、禺等猿猴之属出没于深林幽谷，是山林精灵的化身。泥泥狗中的猴造型活泼灵动，五彩纹样跳跃如林间光影，长臂舒展、神态机敏。申猴泥泥狗以天真的泥土造型，传递着自由不羁与聪慧机变的民间智慧，是童趣与灵性的完美结合。',
  },
  {
    label: '酉鸡',
    animal: '鸡',
    image: '鸡.png',
    westExt: '.png',
    video: 'videos/酉鸡.mp4',
    description: '酉鸡(17:00-19:00)：\n酉时是黄昏时刻，\n寓意日落西山和归家的温馨。\n鸡在此时纷纷归巢，\n象征着守时、规律\n和家庭观念，\n也代表着对生活的\n坚守和责任。',
    longDescription:
      '鸡对应地支"酉"，五行属金，方位正西。在《山海经》的神话谱系中，凤凰、鸾鸟等神禽翱翔九天，是光明与祥瑞的至高象征。泥泥狗中的鸡造型昂首挺胸，五彩羽冠如朝霞绚烂，啼鸣破晓、唤醒沉睡的大地。酉鸡泥泥狗承载着人们对光明、诚信与新生的信仰，是民间美学与天文时序的诗意共鸣。',
  },
  {
    label: '戌狗',
    animal: '狗',
    image: '狗.png',
    westExt: '.mp4',
    video: 'videos/戌狗.mp4',
    description: '戌狗(19:00-21:00)：\n戌时夜幕降临，宁静祥和。\n狗在此时开始\n守护主人的家园，\n象征着忠诚勇敢、\n守护和陪伴，\n是人类忠实的朋友，\n代表着信任和依赖。',
    longDescription:
      '狗对应地支"戌"，五行属土，方位西北偏西。在《山海经》中，犬形神兽守卫天门、驱邪避凶，是最受信赖的守护者。泥泥狗本身就是以"狗"为名的民间泥塑，源于淮阳太昊伏羲陵的祭祀传统。戌狗泥泥狗造型朴拙可爱，五彩纹样如忠诚之心的光芒，承载着守护家园、驱邪纳福的古老信仰。',
  },
  {
    label: '亥猪',
    animal: '猪',
    image: '猪.png',
    westExt: '.png',
    video: 'videos/亥猪.mp4',
    description: '亥猪(21:00-23:00)：\n亥时是夜晚的后半段，\n寓意深沉和安静。\n猪在圈中熟睡，\n象征着憨厚老实、\n知足常乐和无忧无虑，\n也代表着一种\n简单纯粹的生活态度。',
    longDescription:
      '猪对应地支"亥"，五行属水，方位西北偏北。在《山海经》中，彘、豚等异兽与大地丰饶、雨水充沛紧密相连。泥泥狗中的猪造型圆润饱满，五彩花纹如丰收的田野与流淌的河水，传递着富足与圆满的祝福。亥猪泥泥狗作为十二生肖的最后一员，承载着人们对丰衣足食、家业兴旺的千年期盼，是民间艺术中最为温暖质朴的文化符号。',
  },
]

export default zodiac

/**
 * Parse a lobby door id (e.g. "entry-east-3", "entry-west-0") to a zodiac index.
 * Returns null if the id doesn't match the lobby door pattern.
 */
export function zodiacIndexFromDoorId(doorId) {
  const match = String(doorId || '').match(/^entry-(east|west)-(\d+)$/)
  if (!match) return null
  const side = match[1]
  const localIdx = parseInt(match[2], 10)
  const perWall = Math.ceil(zodiac.length / 2) // 6
  const idx = side === 'east' ? localIdx : localIdx + perWall
  return idx >= 0 && idx < zodiac.length ? idx : null
}

/**
 * Build gallery-room payload from a zodiac index, matching the shape
 * that main.js previously derived from Wikipedia data.
 */
export function buildLocalGalleryPayload(zodiacIndex) {
  const idx = (zodiacIndex % zodiac.length + zodiac.length) % zodiac.length
  const z = zodiac[idx]

  return {
    displayTitle: `${z.label}·${z.animal}`,
    description: z.description,
    mainThumbnailUrl: asset('videos2/' + z.label + '.mp4'),
    photos: [asset('koutu/' + z.animal + '.png'), asset('lihui/' + z.animal + '.jpg')],
    photoCaptions: [z.label + '·卡通', z.label + '·立绘'],
    videoUrl: asset(z.video),
    westWallUrl: asset('westwall/' + z.label + (z.westExt || '.mp4')),
    longExtract: z.longDescription,
  }
}

/**
 * Parse a display title (e.g. "子鼠·鼠" or "卯兔·兔") back to a zodiac index.
 * Returns null when the title doesn't match any zodiac entry.
 */
export function zodiacIndexFromTitle(title) {
  const t = String(title || '').trim()
  if (!t) return null

  // Match full display title: "子鼠·鼠"
  for (let i = 0; i < zodiac.length; i += 1) {
    if (t === `${zodiac[i].label}·${zodiac[i].animal}`) return i
  }

  // Match label only: "子鼠"
  for (let i = 0; i < zodiac.length; i += 1) {
    if (t === zodiac[i].label) return i
  }

  return null
}

/**
 * Return a shuffled list of other zodiac entries for the "see also" doors,
 * each shaped as { title, extract } to match the Wikipedia related-item format.
 */
export function buildLocalRelatedItems(excludeIndex, count = 6) {
  const others = zodiac
    .map((z, i) => ({ index: i, ...z }))
    .filter((z) => z.index !== excludeIndex)

  for (let i = others.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = others[i]
    others[i] = others[j]
    others[j] = tmp
  }

  return others.slice(0, count).map((z) => ({
    title: `${z.label}·${z.animal}`,
    extract: z.description,
  }))
}
