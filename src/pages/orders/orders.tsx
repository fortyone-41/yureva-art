import { Cards, Modal } from "../../components";

import "./orders.scss";

const cards = [{
    title: "Красота",
    buttonText: "Приобрести",
    onClick: () => console.log("Приобрести")
}, {
    title: "Красота2",
    buttonText: "Приобрести",
    onClick: () => console.log("Приобрести")
}, {
    title: "Красота3",
    buttonText: "Приобрести",
    options: ["1", "2", "3"],
    onClick: () => console.log("Приобрести")
},]


const Orders = () => {
    return <div className="orders">
        {/* <Cards items={cards} /> */}
        <div className="orders-text">
            <h3>Приглашаю всех желающих окунуться в мир искусства и творчества!
                Предлагаю уроки для людей разного возраста и уровня подготовки.
                В Арт-студии вы найдете:</h3>
            <ol>
                <li>Профессионального и опытного преподавателя в моем лице, который поможет
                    вам освоить технику рисования и научит вас видеть красоту в каждом моменте.</li>
                <li>Индивидуальный подход к каждому ученику, благодаря чему вы сможете
                    учиться в своем темпе и получать максимальное удовольствие от процесса обучения.</li>
                <li>Удобное расписание занятий, которое позволит вам совмещать рисование с
                    учебой или работой.</li>
                <li>Творческую атмосферу, где вы сможете общаться с единомышленниками и
                    обмениваться опытом.</li>
                <li>Возможность участвовать в выставках и конкурсах, чтобы
                    продемонстрировать свои работы и получить признание.</li>
            </ol>
            <h5>Моя Арт-студия также предлагает проведение корпоративных мероприятий.
                Я могу проводить групповые мастер-классы для сотрудников вашей компании (не
                более 5-6 человек), чтобы вместе наслаждаться процессом творчества и укреплять
                командный дух.</h5>
            <h5>В вашем распоряжении будут мольберты, холсты и бумага, краски и карандаши и
                мои знания!</h5>
            <p>Детские группы будут небольшими – не более 4 человек, чтобы все были охвачены
                вниманием педагога. Продолжительность мастер-класса 2 часа.
                Занятия в Арт-Студии планируется начать в дни Новогодних каникул (со 2 по 8
                января 2024 года)</p>
            <p>В рамках мастер-классов для детей будем рисовать в технике гуаши, акварельной и
                акриловой живописи. Стоимость 900 рублей на одного человека.</p>
            <p>Мастер-классы для взрослых позволят вам создать собственное художественное
                произведение в технике масляной или акриловой живописи на холсте.</p>
            <h4>Занятия со взрослыми планируется проводить также индивидуально.</h4>
            <h5>Продолжительность мастер-класса – 3 часа.</h5>
            <p> Стоимость – 1990 рублей за 1 участника.</p>
            <p>В стоимость входят все расходные материалы, включая холст.
                ЕСЛИ ВАМ НАДОЕЛО ПРОВОДИТЬ НОВОГОДНИЕ ПРАЗДНИКИ В ПОСТЕЛИ
                ИЛИ В ДОРОГЕ ОТ СТОЛА ДО ХОЛОДИЛЬНИКА, ЕСЛИ ВЫ ХОТИТЕ
                ОЩУТИТЬ СЕБЯ ТВОРЦОМ, СПОСОБНЫМ СОЗДАТЬ СОБСТВЕННОЕ
                ХУДОЖЕСТВЕННОЕ ПРОИЗВЕДЕНИЕ, ПРИГЛАШАЮ ВАС В <b><i>АРТ-СТУДИЮ
                    СВЕТЛАНЫ ЮРЬЕВОЙ</i></b> – <b>НА ПРОСПЕКТЕ АЛЕКСАНДРОВСКОЙ ФЕРМЫ. Д. 2</b></p>
            <p>ЗАПИСЬ ПО ТЕЛЕФОНУ <a href="tel:+79811890747">+79811890747</a> (WHATSAPP, TELEGRAM)</p>
        </div>
        <Modal isOpened={false} onClose={() => { }} title="" card={{
            title: "Запись на мастеркласс",
            buttonText: "Приобрести",
            onClick: () => console.log("Приобрести")
        }} />
    </div>
}

export { Orders }
