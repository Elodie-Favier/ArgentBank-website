import FeatureItem from "./FeatureItem";
import "../../styles/main.css";



const FeatureSection = () => {
    const dataFeature = [
        {   
            id:1,
            src:"./icon-chat.png",
            alt: "Chat Icon",
            title:"You are our #1 priority",
            content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        },
        {
            id:2,
            src:"./icon-money.png",
            alt: "Money Icon",
            title:"More savings means higher rates",
            content: "The more you save with us, the higher your interest rate will be!",
        },
        {
            id:3,
            src:"./icon-security.png",
            alt:"Security Icon",
            title:"Security you can trust",
            content:"We use top of the line encryption to make sure your data and money is always safe.",
        },
    ]
    return (
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {dataFeature.map(({id, src, alt, title, content}) => <FeatureItem key={id} src={src} alt={alt} title={title} content={content} /> )
                }
                
            </section>
    );
};

export default FeatureSection;