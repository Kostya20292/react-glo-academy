const employers = [
    'АртеМ',
    'максим',
    'Владимир',
    'сергей',
    'НикиТа',
    'евГений',
    ' Дарья',
    ' ',
    'виктория ',
    'ЕкаТерина',
    '',
    ' Андрей ',
    'КИРИЛЛ',
];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach((employer) => {
    if (employer.length > 0 && employer.trim() !== '') {
        const newEmployer = employer.toLowerCase().trim();
        const finalEmployer =
            newEmployer[0].toUpperCase() + newEmployer.slice(1);
        command.push(finalEmployer);
    }
});

const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase'],
};

const calcCash = ({ cash }) => {
    cash = cash || 0;
    const everyCash = cash.reduce((prev, cur) => prev + cur, 0);
    return everyCash;
};

const lesson = calcCash(data);

const makeBusiness = (director, teacher, allModule, gang, course) => {
    teacher = teacher || 'Максим';
    const sumTech = [...data.react, ...data.add, 'и другие'];
    console.log(
        `Стартуем новый курс: ${course}. Владелец: ${director},  преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}.`
    );
    console.log(
        `Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`
    );
    console.log('Технологии которые мы изучим: ');
    console.log(...sumTech);
};

makeBusiness('Артем', null, lesson, command, nameCourse);
