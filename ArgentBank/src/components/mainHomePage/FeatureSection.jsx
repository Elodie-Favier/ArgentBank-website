import FeatureItem from "./FeatureItem";
import "../../styles/main.css";



const FeatureSection = () => {
    // const dataFeature = [
    //     {   
    //         id:1,
    //         imageSrc:"./icon-chat.png",
    //         imageAlt: "Chat Icon",
    //         title:"You are our #1 priority",
    //         content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    //     },
    //     {
    //         id:2,
    //         imageSrc:"./icon-money.png",
    //         imageAlt: "Money Icon",
    //         title:"More savings means higher rates",
    //         content: "The more you save with us, the higher your interest rate will be!",
    //     },
    //     {
    //         id:3,
    //         imageSrc:"./icon-security.png",
    //         imageAlt:"Security Icon",
    //         title:"Security you can trust",
    //         content:"We use top of the line encryption to make sure your data and money is always safe.",
    //     },
    // ]
    return (
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem/>
            </section>
    );
};

export default FeatureSection;