import { userInfo } from "@/data/user-data";
import { PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Let's Work Together
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <a href={`mailto:${userInfo.contact.email}`} className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground">
                  📧
                </div>
                <span>{userInfo.contact.email}</span>
              </a>
              <a href={userInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground">
                  💼
                </div>
                <span>LinkedIn</span>
              </a>
              <a href={`tel:${userInfo.contact.phone}`} className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
