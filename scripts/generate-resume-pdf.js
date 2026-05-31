const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'DOCUMENTOS', 'curriculo-gabriel-felipe.pdf');

const sections = [
    {
        title: 'RESUMO PROFISSIONAL',
        lines: [
            'Desenvolvedor Full-Stack Junior com experiencia na criacao de solucoes web responsivas,',
            'interfaces intuitivas e aplicacoes dinamicas. Atua com HTML, CSS, JavaScript, PHP, MySQL,',
            'Firebase, JSON, Node.js e Docker, com atencao a usabilidade e experiencia do usuario.'
        ]
    },
    {
        title: 'COMPETENCIAS',
        lines: [
            'HTML5 | CSS3 | JavaScript | TypeScript | PHP | MySQL | Firebase | JSON',
            'Node.js | Docker | UI/UX Design | Git | Design Responsivo'
        ]
    },
    {
        title: 'EXPERIENCIA E ATUACAO',
        items: [
            {
                heading: 'Desenvolvimento Full-Stack | Jan 2025 - Presente',
                lines: [
                    'Desenvolvimento de aplicacoes web responsivas e dinamicas com HTML, CSS, JavaScript,',
                    'PHP e MySQL. Projetos proprios com foco em performance e experiencia do usuario.'
                ]
            },
            {
                heading: 'UI/UX Design | Mar 2025 - Presente',
                lines: [
                    'Criacao de interfaces intuitivas para aplicacoes web e mobile, prototipagem interativa',
                    'e estudo de design systems com foco em clareza e usabilidade.'
                ]
            },
            {
                heading: 'Producao de Conteudo Digital | Mar 2025 - Presente',
                lines: [
                    'Producao de videos, transmissoes ao vivo e conteudo sobre tecnologia, desenvolvimento',
                    'e rotina de estudos para plataformas digitais.'
                ]
            }
        ]
    },
    {
        title: 'PROJETOS EM DESTAQUE',
        items: [
            { heading: 'Cafe Store', lines: ['Solucao para identidade digital, aplicacoes web, sites e landing pages para negocios.'] },
            { heading: 'Study Overlay', lines: ['Overlays de produtividade em tempo real para criadores que utilizam OBS.'] },
            { heading: 'LinkWave', lines: ['Pagina de links para criadores, influenciadores e streamers compartilharem conteudo.'] },
            { heading: 'StreamPix', lines: ['Plataforma de alertas de doacoes via Pix para transmissoes ao vivo.'] },
            { heading: 'Samptech', lines: ['Loja de informatica e assistencia tecnica para computadores, celulares e consoles.'] },
            { heading: 'WaveOS', lines: ['Projeto de sistema operacional executado no navegador.'] }
        ]
    },
    {
        title: 'FORMACAO COMPLEMENTAR',
        lines: [
            'Cursos e certificados em desenvolvimento web, JavaScript, PHP, Python, HTML, CSS, bancos de',
            'dados, React Native, UX, Scrum, Linux e fundamentos de programacao.',
            'Plataformas: Alura, Curso em Video, Mimo, Sololearn e LinkedIn Learning.'
        ]
    }
];

const escapePdfText = (text) => text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');

const drawText = (text, x, y, size = 10, bold = false, color = '0.10 0.09 0.16') => (
    `BT ${color} rg /${bold ? 'F2' : 'F1'} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`
);

const pages = [];
let content = [];
let y = 790;

const startPage = () => {
    content = [];
    y = 790;
};

const finishPage = () => {
    content.push(drawText('Gabriel Felipe | Curriculo profissional', 42, 28, 8, false, '0.38 0.38 0.48'));
    pages.push(content.join('\n'));
};

const ensureSpace = (requiredHeight) => {
    if (y - requiredHeight < 52) {
        finishPage();
        startPage();
    }
};

startPage();
content.push(drawText('Gabriel Felipe', 42, y, 25, true, '0.41 0.25 0.78'));
y -= 24;
content.push(drawText('Desenvolvedor Full-Stack Junior | Designer UI/UX', 42, y, 12, true, '0.31 0.30 0.40'));
y -= 18;
content.push(drawText('Curitiba, PR - Brasil | gutiajs@gmail.com | +55 (41) 99671-3782', 42, y, 9));
y -= 14;
content.push(drawText('github.com/CAFE2l | LinkedIn: Gabriel Felipe', 42, y, 9));
y -= 24;

for (const section of sections) {
    ensureSpace(42);
    content.push(drawText(section.title, 42, y, 12, true, '0.41 0.25 0.78'));
    y -= 6;
    content.push('0.87 0.85 0.94 RG 1 w 42 ' + y + ' m 553 ' + y + ' l S');
    y -= 18;

    for (const line of section.lines || []) {
        ensureSpace(15);
        content.push(drawText(line, 42, y, 9.5));
        y -= 14;
    }

    for (const item of section.items || []) {
        ensureSpace(32 + (item.lines.length * 14));
        content.push(drawText(item.heading, 42, y, 10, true));
        y -= 14;
        for (const line of item.lines) {
            content.push(drawText(line, 52, y, 9.5));
            y -= 14;
        }
        y -= 4;
    }

    y -= 9;
}

finishPage();

const objects = [];
objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

const pageRefs = [];
pages.forEach((pageContent, index) => {
    const pageObjectId = 5 + (index * 2);
    const contentObjectId = pageObjectId + 1;
    pageRefs.push(`${pageObjectId} 0 R`);
    objects[pageObjectId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjectId} 0 R >>`;
    objects[contentObjectId] = `<< /Length ${Buffer.byteLength(pageContent, 'binary')} >>\nstream\n${pageContent}\nendstream`;
});
objects[2] = `<< /Type /Pages /Kids [${pageRefs.join(' ')}] /Count ${pages.length} >>`;

let pdf = '%PDF-1.4\n';
const offsets = [0];

for (let id = 1; id < objects.length; id += 1) {
    offsets[id] = Buffer.byteLength(pdf, 'binary');
    pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, 'binary');
pdf += `xref\n0 ${objects.length}\n`;
pdf += '0000000000 65535 f \n';

for (let id = 1; id < objects.length; id += 1) {
    pdf += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, Buffer.from(pdf, 'binary'));
console.log(`Generated ${outputPath}`);
