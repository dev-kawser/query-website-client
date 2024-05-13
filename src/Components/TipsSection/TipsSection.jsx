

const TipsSection = () => {
  return (
    <section className="py-12 my-10 shadow-xl lg:my-20 container mx-auto rounded-md border border-blue-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl overpass font-semibold mb-6 text-center">Smartphone <span className="text-blue-400">Tips</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Camera Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Camera Tips</h3>
            <ul className="list-disc ml-6">
              <li>Use HDR mode for better dynamic range in photos.</li>
              <li>Clean your camera lens regularly for clearer shots.</li>
              <li>Experiment with different camera modes like portrait, night mode, and panorama.</li>
            </ul>
          </div>
          
          {/* Gaming Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Gaming Tips</h3>
            <ul className="list-disc ml-6">
              <li>Adjust graphic settings for smoother gameplay.</li>
              <li>Use a game booster app to optimize performance.</li>
              <li>Consider investing in a gaming controller for a better gaming experience.</li>
            </ul>
          </div>
          
          {/* Videography Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Videography Tips</h3>
            <ul className="list-disc ml-6">
              <li>Shoot videos in landscape mode for a wider frame.</li>
              <li>Use a stabilizer or tripod for smoother footage.</li>
              <li>Experiment with different frame rates and resolutions for different effects.</li>
            </ul>
          </div>
          
          {/* Battery Life Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Battery Life Tips</h3>
            <ul className="list-disc ml-6">
              <li>Avoid overcharging your phone to extend battery lifespan.</li>
              <li>Turn off unnecessary features like Wi-Fi, Bluetooth, and GPS when not in use.</li>
              <li>Monitor battery-hogging apps and restrict background activity for better battery life.</li>
            </ul>
          </div>
          
          {/* Normal Use Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Normal Use Tips</h3>
            <ul className="list-disc ml-6">
              <li>Regularly update your apps and operating system for security and performance improvements.</li>
              <li>Use a screen protector and case to protect your phone from damage.</li>
              <li>Manage your battery usage by limiting background apps and adjusting screen brightness.</li>
            </ul>
          </div>
          
          {/* Professional Use Tips */}
          <div className="border border-blue-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Use Tips</h3>
            <ul className="list-disc ml-6">
              <li>Install productivity apps like Microsoft Office or Google Workspace for work-related tasks.</li>
              <li>Use cloud storage services for easy access to documents and files.</li>
              <li>Consider investing in a Bluetooth keyboard for typing longer documents.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
