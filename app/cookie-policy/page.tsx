import React from "react";

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-6">
        Wellcare Medical Center &gt; Cookie Policy
      </p>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At Wellcare Medical Center, we are committed to ensuring that your privacy is protected and respected. This Cookie Policy explains what cookies are, how we use them on our website, and how you can control or manage your cookie preferences. By using our website, you agree to the use of cookies in accordance with this policy.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the website recognize your device and store information about your preferences or past actions. Cookies are widely used to make websites work more efficiently, provide a better user experience, and enable website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Types of Cookies We Use</h2>
          <div className="space-y-4 mt-2">
            <div>
              <h3 className="font-semibold text-lg">1. Necessary Cookies</h3>
              <p>These cookies are essential for the proper functioning of our website. They enable you to navigate the site, use its features, and access secure areas. Without these cookies, certain services, like online forms or appointments, may not function.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">2. Performance Cookies</h3>
              <p>Performance cookies collect information about how visitors use our website, such as which pages are visited most often and any error messages received. These cookies help us improve our website’s performance and understand how users interact with our content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">3. Functional Cookies</h3>
              <p>Functional cookies enable our website to remember your preferences and settings, such as language and location. These cookies enhance the user experience by providing more personalized features and content based on your previous interactions with the site.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">4. Targeting and Advertising Cookies</h3>
              <p>These cookies track your browsing habits and are used to deliver content and advertisements relevant to you. They may also limit the number of times you see an ad and help us measure the effectiveness of our advertising campaigns. Please note that Wellcare Medical Center does not engage in direct advertising but may work with third-party services that use these types of cookies.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Cookies</h2>
          <p>
            Some cookies may be set by third-party providers, such as Google Analytics, to analyze traffic, provide insights, and help us understand how visitors use our website. These third parties may use their cookies for their own purposes. We do not have control over third-party cookies, but you can manage them through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Managing Your Cookie Preferences</h2>
          <p>
            You can manage or disable cookies through your browser settings. Most browsers allow you to refuse, accept, or delete cookies. However, please note that disabling cookies may impact your experience and restrict access to certain features on our website.
          </p>
          <p className="mt-2">Here’s how you can manage cookies on some popular browsers:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Google Chrome: Manage Cookies</li>
            <li>Mozilla Firefox: Manage Cookies</li>
            <li>Safari: Manage Cookies</li>
            <li>Microsoft Edge: Manage Cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to This Cookie Policy</h2>
          <p>
            Wellcare Medical Center reserves the right to update or modify this Cookie Policy at any time. Any changes will be posted on this page, and the date at the top of the policy will be updated accordingly. We encourage you to review this policy periodically to stay informed about our use of cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>If you have any questions or concerns regarding our Cookie Policy, please contact us:</p>
          <div className="mt-2 not-italic">
            <p className="font-semibold">Wellcare Medical Center</p>
            <p>Email: wellcaremcllc@gmail.com</p>
            <p>Phone: +971 6 5791444</p>
          </div>
        </section>
      </div>
    </main>
  );
}