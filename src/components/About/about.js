import React from "react";
import "./About.css";
import img7 from "../Services/Home/Banner/imges/img7.jpg";
import img8 from "../Services/Home/Banner/imges/img8.jpg";

const about = () => {
  return (
    <div>
      <h2 className="p-2 ">About US Our City Hospital</h2>
      <div>
        <img src={img7} alt="" />
        <div>
          <h2>Learn about hospitals</h2>
          <p className="pra">
            Hospital, an institution that is built, staffed, and equipped for
            the diagnosis of disease; for the treatment, both medical and
            surgical, of the sick and the injured; and for their housing during
            this process. The modern hospital also often serves as a centre for
            investigation and for teaching. To better serve the wide-ranging
            needs of the community, the modern hospital has often developed
            outpatient facilities, as well as emergency, psychiatric, and
            rehabilitation services. In addition, “bedless hospitals” provide
            strictly ambulatory (outpatient) care and day surgery. Patients
            arrive at the facility for short appointments. They may also stay
            for treatment in surgical or medical units for part of a day or for
            a full day, after which they are discharged for follow-up by a
            primary care health provider. Hospitals have long existed in most
            countries. Developing countries, which contain a large proportion of
            the world’s population, generally do not have enough hospitals,
            equipment, and trained staff to handle the volume of persons who
            need care. Thus, people in these countries do not always receive the
            benefits of modern medicine, public health measures, or hospital
            care, and they generally have lower life expectancies.In developed
            countries the hospital as an institution is complex, and it is made
            more so as modern technology increases the range of diagnostic
            capabilities and expands the possibilities for treatment. As a
            result of the greater range of services and the more-involved
            treatments and surgeries available, a more highly trained staff is
            required. A combination of medical research, engineering, and
            biotechnology has produced a vast array of new treatments and
            instrumentation, much of which requires specialized training and
            facilities for its use. Hospitals thus have become more expensive to
            operate, and health service managers are increasingly concerned with
            questions of quality, cost, effectiveness, and efficiency.
          </p>
          <h2>Hospital History</h2>
          <p className="pra">
            As early as 4000 BCE, religions identified certain of their deities
            with healing. The temples of Saturn, and later of Asclepius in Asia
            Minor, were recognized as healing centres. Brahmanic hospitals were
            established in Sri Lanka as early as 431 BCE, and King Ashoka
            established a chain of hospitals in Hindustan about 230 BCE. Around
            100 BCE the Romans established hospitals (valetudinaria) for the
            treatment of their sick and injured soldiers; their care was
            important because it was upon the integrity of the legions that the
            power of ancient Rome was based.It can be said, however, that the
            modern concept of a hospital dates from 331 CE when Roman emperor
            Constantine I (Constantine the Great), having been converted to
            Christianity, abolished all pagan hospitals and thus created the
            opportunity for a new start. Until that time disease had isolated
            the sufferer from the community. The Christian tradition emphasized
            the close relationship of the sufferer to the members of the
            community, upon whom rested the obligation for care. Illness thus
            became a matter for the Christian church. About 370 CE St. Basil the
            Great established a religious foundation in Cappadocia that included
            a hospital, an isolation unit for those suffering from leprosy, and
            buildings to house the poor, the elderly, and the sick. Following
            this example, similar hospitals were later built in the eastern part
            of the Roman Empire. Another notable foundation was that of St.
            Benedict of Nursia at Montecassino, founded early in the 6th
            century, where the care of the sick was placed above and before
            every other Christian duty. It was from this beginning that one of
            the first medical schools in Europe ultimately grew at Salerno and
            was of high repute by the 11th century. This example led to the
            establishment of similar monastic infirmaries in the western part of
            the empire. The Hôtel-Dieu of Lyon was opened in 542 and the
            Hôtel-Dieu of Paris in 660. In these hospitals more attention was
            given to the well-being of the patient’s soul than to curing bodily
            ailments. The manner in which monks cared for their own sick became
            a model for the laity. The monasteries had an infirmitorium, a place
            to which their sick were taken for treatment. The monasteries had a
            pharmacy and frequently a garden with medicinal plants. In addition
            to caring for sick monks, the monasteries opened their doors to
            pilgrims and to other travelers.
          </p>
          <h2>Refer to our hospital for facilities</h2>
          <div>
            <img className="disply" src={img8} alt="" />

            <p className="pra">
              We have an ambulance in the emergency department of our hospital.
              There are more than 1000 ambulances available immediately. This is
              a very big hospital. We always try to do something good. Hospitals
              that specialize in one type of illness or one type of patient can
              generally be found in the developed world. In large university
              centres where postgraduate teaching is carried out on a large
              scale, such specialized health services often are a department of
              the general hospital or a satellite operation of the hospital.
              Changing conditions or modes of treatment have lessened the need
              or reduced the number of some types of specialized institutions;
              this may be seen in the cases of tuberculosis, leprosy, and mental
              hospitals. On the other hand, specialized surgical centres and
              cancer centres have increased in number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
