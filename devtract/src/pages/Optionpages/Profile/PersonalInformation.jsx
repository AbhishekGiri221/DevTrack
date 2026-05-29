import { CircleAlert, Pencil } from "lucide-react";
import './PersonalInformation.css';
import { FiMail, FiUser } from "react-icons/fi";
import { MapPin, Briefcase } from "lucide-react";

function PersonalInfromation() {

    // dynamic loading name task and all... remaining implementation
    const profilData = [
        {label:"Full Name", value:"Abhishek Giri"},
        {label:"Email", value:"ag349628@gmail.com"},
        {label:"Location", value:"Shyamnath chawl poisar kandivali east"},
        {label:"Ocupation", value:"Software Developer"},
        {label:"Bio", value:"None of you Buisness"},
    ]

    return (
        <>
            <div className="personal-information-container">

                <div className="top-contents">
                    <h4>Personal Information</h4>
                    <button className="edit-profile-button">
                        <Pencil size={14} />
                        Edit
                    </button>
                </div>

                <div className="bottom-contents">

                    <div className="name-content content-style">
                        <div className="content-logo">
                            <FiUser size={17} color="var(--primary-color)" />
                        </div>
                        <div className="content-text content-text-style">
                            <div className="content-heading-style">Full Name</div>

                            <div>Abhishek Giri</div>
                        </div>
                    </div>

                    <div className="email-content content-style">
                        <div className="content-logo">
                            <FiMail size={17} color="var(--primary-color)" />
                        </div>
                        <div className="content-text content-text-style">
                            <div className="content-heading-style">Email Address</div>

                            <div>ag349628@gmail.com</div>
                        </div>
                    </div>


                    <div className="place-content content-style">
                        <div className="content-logo">
                            <MapPin size={17} color="var(--primary-color)" />
                        </div>
                        <div className="content-text content-text-style">
                            <div className="content-heading-style">Location</div>

                            <div>poisar kandivali east</div>
                        </div>
                    </div>

                    <div className="occupations-content content-style">
                        <div className="content-logo">
                            <Briefcase size={17} color="var(--primary-color)" />
                        </div>
                        <div className="content-text content-text-style">
                            <div className="content-heading-style">Occupation</div>

                            <div>Software Developer</div>
                        </div>
                    </div>

                    <div className="bio-content content-style">
                        <div className="content-logo">
                            <CircleAlert size={17} color="var(--primary-color)" />
                        </div>
                        <div className="content-text content-text-style">
                            <div className="content-heading-style">Bio</div>

                            <div>NOne of your buisness</div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default PersonalInfromation;