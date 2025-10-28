import NoContent from "@/components/website/no-content";
import { fetchTermsAndConditions } from "@/serverCalls/website";

const CustomerTermsAndConditions = async () => {
  //   let TermsContent = await fetchTermsAndConditions();

  //   if (!TermsContent) {
  //     return (
  //       <>
  //         <NoContent url={"/customer"} />
  //       </>
  //     );
  //   }
  return (
    <main>
      <h2 className="text-[#262626] my-5 text-center font-semibold px-1 text-2xl md:text-3xl">
        {/* {TermsContent?.title || "Terms and Conditions"} */}
        {"Terms and Conditions"}
      </h2>
      <div>
        <h3 className="font-semibold text-[#262626] text-center px-1 my-2 text-xl md:text-2xl">
          Legal Terms and Conditions
        </h3>
        {/* <div className="max-w-7xl mt-15 mb-5  mx-auto px-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: TermsContent?.content || "" }}
          />
        </div> */}
        <div className="max-w-7xl mt-15 mb-5  mx-auto px-4">
          <ol>
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                1. MEINHAUS
              </p>
              <p dir="ltr">
                MEINHAUS means Mein Haus Inc. and its affiliates who provide
                brokerage services connecting homeowners with subcontractors for
                home improvement, renovation, and related projects.
              </p>
              <p dir="ltr" role="presentation">
                <strong>&nbsp;</strong>
              </p>
            </li>
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                2. INTRODUCTION
              </p>
              <p dir="ltr" className="my-3">
                (a) These terms of use explain how you may use this website
                ("Site"). References in these terms to the Site includes the
                following website{" "}
                <a
                  href="https://mein-haus-website.vercel.app/customer"
                  className="text-blue-400"
                >
                  www.meinhaus.ca/customer
                </a>
                &nbsp;and all associated web pages. You should read these terms
                and conditions carefully before using the Site. By accessing or
                using this Site or otherwise indicating your consent, you agree
                to be bound by these terms and conditions and the documents
                referred to in them. If you do not agree with or accept any of
                these terms, you should cease using the Site immediately. If you
                have any questions about this website, please contact{" "}
                <a href="mailto:info@meinhaus.ca" className="text-blue-400">
                  info@meinhaus.ca
                </a>{" "}
                or (647)-930-9066.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (b) Definitions
              </p>
              <p dir="ltr">
                "Content" means any text, images, video, audio or other
                multimedia content, software or other information or material
                submitted to, subsisting on or accessible from the Site;
              </p>
              <p dir="ltr">
                "We", "Us" or "Our" means Fix Mein Haus Inc. also known as Mein
                Haus Inc. References to us in these terms also includes our
                group companies from time to time.&nbsp;
              </p>
              <p dir="ltr">
                "You" or "Your" means the person accessing or using the Site or
                its Content.
              </p>
              <p dir="ltr" className="my-3">
                (c) Privacy Statement. These terms include our Privacy Statement
                which shall be subject to these terms in the event of any
                conflict or inconsistency. These terms may also be supplemented
                or replaced by additional terms ("Additional Terms") relating to
                specific Content, goods or services made available or supplied
                by us using the Site. Additional Terms will be made available on
                relevant pages of the Site and will be accessible by you for
                your acceptance before you place engage the services of
                MEINHAUS. Additional Terms shall prevail to the extent that
                there is any conflict or inconsistency with any other of these
                terms.
              </p>
              <p dir="ltr" className="my-3">
                (d) This Site is intended for and directed to residents of
                Canada over the age of 18 years of age.&nbsp;
              </p>
              <p dir="ltr">
                (e) Accessibility. We seek to make this Site as accessible as
                possible. If you have any problems accessing this Site or the
                content contained on it, please contact us at{" "}
                <a href="mailto:info@meinhaus.ca">info@meinhaus.ca</a>
              </p>
              <p>&nbsp;</p>
            </li>
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                3. RESTRICTIONS ON USE
              </p>
              <p dir="ltr" className="my-3">
                (a) The Site is for your personal use only. As a condition of
                your use of the Site, you agree:
              </p>
              <p dir="ltr">
                (i) not to use the Site for any purpose that is unlawful under
                applicable law, or prohibited by these terms and conditions;
              </p>
              <p dir="ltr" className="my-3">
                (ii) not to defame or disparage anybody or make comments of an
                obscene, derogatory or offensive manner or otherwise use the
                Site or its Content in a way that brings us or any third party
                into disrepute or causes us to be liable to any third party;
              </p>
              <p dir="ltr" className="my-3">
                (iii) not to reverse engineer, decompile, copy, modify,
                distribute, transmit, license, sublicense, display, revise,
                perform, transfer, sell or otherwise make available to any third
                party or otherwise publish, deep-link, create derivative works
                from or exploit in any way the Site or its Content except as
                permitted by us under these terms or as expressly provided under
                applicable law and/or under any Additional Terms;
              </p>
              <p dir="ltr">
                (iv) not to use the Site to distribute viruses or malware or
                other similar harmful software code;
              </p>
              <p dir="ltr" className="my-3">
                (v) not to represent or suggest that we endorse any other
                business, product or service unless we have separately agreed to
                do so in writing; and
              </p>
              <p dir="ltr" className="my-3">
                (vi) that you are solely responsible for all costs and expenses
                you may incur in relation to your use of the Site and shall be
                solely responsible for keeping your password and other account
                details confidential.
              </p>
              <p dir="ltr" className="my-3">
                (b) We reserve the right to prevent or suspend your access to
                the Site if you do not comply with any part of these terms and
                conditions or any applicable law.
              </p>
              <p dir="ltr">
                (c) You may not use any content on our Website or any MEINHAUS
                server to train any artificial intelligence (AI) or a similar
                system without our express prior written consent.
              </p>
            </li>
          </ol>
          <p>&nbsp;</p>
          <ol start="4">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                4. EMAIL DISCLAIMER
                <br />
              </p>
              Email communication including any information transmitted with it
              is intended only for the use of the addressee(s) and is
              confidential. If you are not an intended recipient or responsible
              for delivering the message to an intended recipient, any review,
              disclosure, conversion to hard copy, dissemination, reproduction
              or other use of any part of this communication is strictly
              prohibited, as is the taking or omitting of any action in reliance
              upon this communication. If you receive this communication in
              error or without authorization please notify us immediately by
              return e-mail or otherwise and permanently delete the entire
              communication from any computer, disk drive, or other storage
              medium.&nbsp;
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="5">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                5. INFORMATION
                <br />
              </p>
              Information provided by MEINHAUS and other sources on this Website
              is believed to be accurate and reliable when placed on this site,
              but we cannot guarantee it is accurate or complete or current at
              all times. Information on this site is for informational purposes
              only and is not intended to provide financial, legal, accounting
              or tax advice and should not be relied upon in that regard.&nbsp;
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="7">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                6. OWNERSHIP, USE AND INTELLECTUAL PROPERTY RIGHTS
              </p>
              <p dir="ltr" className="my-3">
                (a) This Site and all intellectual property rights in the Site
                (including without limitation any Content) are owned by us
                and/or our licensors. We and our licensors reserve all our
                intellectual property rights (which include without limitation
                all copyright, trademarks, domain names, design rights, database
                rights, patents and all other intellectual property rights of
                any kind) whether registered or unregistered anywhere in the
                world.
              </p>
              <p dir="ltr" className="my-3">
                (b) Nothing in these terms and conditions grants you any rights
                in the Site other than as necessary to enable you to access the
                Site. You agree not to adjust to try to circumvent or delete any
                intellectual property notices contained on the Site and in
                particular in any digital rights or other security technology
                embedded or contained within any Site Content.
              </p>
              <p dir="ltr" className="my-3">
                (c) Trademarks. Certain names, words, titles, phrases, logos,
                icons, graphics or designs in the pages of this Website may
                constitute trade names, registered or unregistered trademarks or
                service marks ("Trademarks") of MEINHAUS or of third parties and
                used under license by MEINHAUS. However, the display of
                Trademarks on pages at this Website does not imply that any
                license has been granted to any third party.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p dir="ltr">
                All information in this Website is protected under the copyright
                laws of Canada and/or other countries. Users of this Website
                shall be entitled to copy any information for their own personal
                use but may not republish or reproduce any such information in
                any manner, including electronic reproduction by "uploading" or
                "downloading", without the prior written consent of MEINHAUS
                Otherwise, no one has permission to copy, redistribute,
                reproduce or republish, in any form, any information found in
                the pages of this Website.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p dir="ltr">
                Any unauthorized downloading, re-transmission, or other copying
                or modification of Trademarks or other contents of this Website
                may be a violation of statutory or common law rights which could
                subject the violator to legal action.
              </p>
              <p>&nbsp;</p>
              <p dir="ltr" role="presentation">
                <strong>&nbsp;</strong>
              </p>
            </li>
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                7. PRODUCT AND SERVICES INFORMATION
                <br />
              </p>
              Products and services of MEINHAUS are only offered in
              jurisdictions where they may be lawfully offered for sale. All
              products and services are subject to the terms of the applicable
              agreement. The information in this Website is subject to change
              without notice. This communication does not constitute an offer or
              solicitation by anyone in any jurisdiction in which such an offer
              or solicitation is not authorized or to any person to whom it is
              unlawful to make such an offer or solicitation
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="8">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                8. ACCOUNT CREATION
              </p>
              <p dir="ltr">
                You may need your own MEINHAUS account to use certain MEINHAUS
                Services, and you may be required to be logged in to the account
                and have a valid payment method associated with it. If there is
                a problem charging your selected payment method, we may charge
                any other valid payment method associated with your account.
                Visit Your Payments to manage your payment options. You are
                responsible for maintaining the confidentiality of your account
                and password and for restricting access to your account, and you
                agree to accept responsibility for all activities that occur
                under your account or password. MEINHAUS does sell services for
                children, but it sells them to adults who can purchase with a
                credit card or other permitted payment method. If you are under
                the age of majority in your province or territory of residence,
                you may use the MEINHAUS Services only with involvement of a
                parent or guardian. MEINHAUS reserves the right to refuse
                service, terminate accounts, terminate your rights to use
                MEINHAUS Services, remove or edit content, or cancel orders in
                its sole discretion.
              </p>
            </li>
          </ol>
          <p>&nbsp;</p>
          <ol start="9">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                9. SUBSCRIPTION SERVICES
              </p>
              <p dir="ltr" className="my-3">
                The use of the Site requires an active subscription with
                MEINHAUS.&nbsp;
              </p>
              <p>
                Your subscription automatically renews and you will be
                automatically billed until we receive notification that you want
                to cancel the
                subscription.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>
                To cancel your subscription, please follow these steps: To
                cancel, please follow instructions provided in sign-up PDF sent
                after initial registration. Account details can be accessed, and
                changed when logged in at www.meinhaus.ca/prologin. Your account
                will be cancelled after 30 days from
                termination.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>
                When you provide us with your payment information, you authorize
                our use of and access to the payment instrument you have chosen
                to use. By providing us with your payment information, you
                authorize us to charge the amount due to this payment
                instrument.
              </p>
              <p>
                If we believe your payment has violated any law or these Terms
                and Conditions, we reserve the right to cancel or reverse your
                transaction.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p className="my-3">
                <strong>Late Payment:</strong>&nbsp;If Users fail to pay any
                Platform Fees or Contract Fees when due, MEINHAUS reserves the
                right to suspend a Users access to the MEINHAUS Platform and
                withhold the posting of any requests or bids for Sub-contractor
                services until all due and undisputed amounts are paid in full.
                Any late payment will be increased by the costs of collection
                (if any) and will incur interest at the rate of one and a half
                percent (1.5%) compounded monthly (19.56% annually), or the
                maximum legal rate (if less), plus all expenses of collection,
                until fully paid.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                <strong>Taxes:</strong>&nbsp;The Fees set out in these Terms and
                Conditions do not include applicable sales, use, gross receipts,
                value-added, excise, personal property or other taxes. Users
                will be responsible for and pay all applicable taxes, duties,
                tariffs, assessments, export and import fees or similar charges
                (including interest and penalties imposed thereon) on the
                transactions contemplated in connection with these Terms and
                Conditions other than taxes based on the net income or profits
                of MEINHAUS.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="11">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                10. SOFTWARE
              </p>
              <p dir="ltr">
                Where any software is made available for downloading from the
                Site, this is our copyrighted work and/or that of our licensors.
                You may only use such software in accordance with the terms of
                the end user licence agreement, if any, which accompanies the
                software and, subject thereto, in accordance with these terms.
                All such software is made available for downloading [solely for
                your personal use in a non-commercial manner]. Any reproduction
                or redistribution of software not in accordance with the end
                user licence agreement and/or these terms is expressly
                prohibited, and may result in severe civil and criminal
                penalties. Our software is warranted only to the extent
                expressly required by Canadian law or according to the terms of
                the end user licence agreement. We hereby disclaim all other
                warranties, conditions and other terms (whether express or
                implied) with regard to the software, including all implied
                warranties and conditions of satisfactory quality, freedom from
                defects and fitness for a particular purpose. In no event shall
                our aggregate liability in respect of any such software exceed
                the limitations of liability in the applicable end user licence
                agreement, or in all other cases the amount you paid us for the
                relevant software.
              </p>
              <p>&nbsp;</p>
              <p dir="ltr" role="presentation">
                <strong>&nbsp;</strong>
              </p>
            </li>
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                11. SUBMITTING INFORMATION TO THE SITE
              </p>
              <p dir="ltr" className="my-3">
                (a) The Site is not a secure means of communication and any
                information you supply to us will not be kept confidential. For
                that reason, you should not submit or send to us any patentable
                ideas or patent applications, advertising or marketing
                suggestions, prototypes or any information, written or oral,
                which you regard as confidential or commercially sensitive or
                valuable (collectively referred to as "Unwanted Submissions").
                While we value your feedback, you agree not to submit any
                Unwanted Submissions. Any submission (including any Unwanted
                Submission) made to us is deemed to be our property. By
                transmitting or posting any submission or other material to us,
                you agree that, subject to our Privacy Statement, we are
                entitled to use any such information in any manner we see fit
                (including reproduction, transmission, publication, broadcast,
                and posting on any media and anywhere in the world) on a free of
                charge basis. We shall not be subject to any obligation of
                confidentiality nor be liable for any use and/or disclosure of
                such submissions.
              </p>
              <p dir="ltr" className="my-3">
                (b) Where our Site enables you to communicate with us and/or
                other users of the Site, you may not use the Site to transmit
                harmful or offensive (e.g., violent, obscene, discriminatory,
                defamatory or otherwise illegal) communications or material
                which might otherwise bring us or the Site into disrepute.
                Although we reserve the right to monitor, edit, review or remove
                discussions, chats, postings, transmissions, bulletin boards and
                similar communications on the Site from time to time, we are
                under no obligation to do so and assume no responsibility or
                liability arising from any Content posted on the Site nor for
                any error, omission, infringement, defamatory statement,
                obscenity or inaccuracy contained in any such information. Our
                right to use submissions or other material provided by you is
                non-exclusive, freely transferable and worldwide so you shall be
                entitled to use your own material yourself subject to applicable
                law.
              </p>
              <p dir="ltr" className="my-3">
                (c) You represent and warrant that any Content you supply to us
                is and shall be your own original work and has been lawfully
                provided to us and that you have all necessary consents to
                provide this to us and that we shall be entitled to disclose
                your name with any such Content that we may choose to publish.
                You agree that you waive all moral rights you may have in any
                such Content but that any personal data you supply with your
                Content may, if we choose to do so, be used by us as described
                in our Privacy Statement.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="12">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                12. ACCURACY OF INFORMATION AND AVAILABILITY OF THE SITE
              </p>
              <p dir="ltr" className="my-3">
                (a) While we use reasonable efforts to include accurate and
                up-to-date information on the Site, we do not represent, warrant
                or promise (whether expressly or by implication) that any
                Content is or remains available, accurate, complete and up to
                date, free from bugs, errors or omissions or fit or suitable for
                any purpose. Any reliance you may place on the information on
                this Site is at your own risk and we may suspend or terminate
                operation of the Site at any time at our sole discretion.
                Nothing in these terms and conditions shall operate to prejudice
                any mandatory statutory requirement or your statutory rights.
                Content on the Site is provided for your general information
                purposes only and to inform you about us and our products and
                news, features, services and other websites, which may be of
                interest. It does not constitute technical, financial or legal
                advice or any other type of advice and should not be relied on
                for any purpose.
              </p>
              <p dir="ltr">
                (b) While we make commercially reasonable efforts to ensure that
                the Site is available, we do not represent, warrant or guarantee
                in any way the Site's continued availability at all times or
                uninterrupted use by you of the Site.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="13">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                13. HYPERLINKS AND THIRD PARTY SITES
                <br />
              </p>
              (a) The Site may contain hyperlinks or references to third-party
              websites other than the Site. Any such hyperlinks or references
              are provided for your convenience only. We have no control over
              third-party websites and accept no responsibility for any content,
              material or information contained in them. The display of any
              hyperlink and reference to any third-party website does not
              constitute an endorsement of such third party's website, products
              or services. Your use of a third-party site may be governed by the
              terms and conditions of that third-party site.
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="14">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                14. WARRANTIES AND LIMITATION OF LIABILITY
              </p>
              <p dir="ltr" className="my-3">
                (a) You agree that your use of the Site is on an "as available"
                basis. As stated above, except as otherwise expressly required
                by applicable law, we make no representations, warranties,
                conditions or other terms (whether express or implied) in
                relation to the provision of the Site, including without
                limitation as to completeness, accuracy and currency or any
                Content on the Site, or as to satisfactory quality or fitness
                for a particular purpose.
              </p>
              <p dir="ltr" className="my-3">
                (b) To the maximum extent permitted by applicable law, we
                exclude all liability (whether arising in contract, tort, breach
                of statutory duty or otherwise) which we may otherwise have to
                you as a result of any error or inaccuracies in any Content, the
                unavailability of the Site for any reason, and any
                representation or statement made on the Site.
              </p>
              <p dir="ltr" className="my-3">
                (c) We will not be liable for any loss or damage we cause which
                we could not reasonably anticipate when you started using the
                Site, for example if you lose revenue, salary, profits or
                reputation as a result of your use of the Site and/or the acts
                or omissions of any third party such as other users of the Site
                or any other indirect or consequential loss or damage you may
                incur in relation to the Site and its Content.
              </p>
              <p dir="ltr" className="my-3">
                (d) Under no circumstances shall our aggregate liability to you
                for any and all claims arising from your use of the Site
                (including the downloading or use of any Content) exceed, to the
                extent permitted by law the amounts paid by you to us in
                relation to your use of the Site or its Content, up to a maximum
                of $100.00.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (e) Notwithstanding any other provision of these terms and
                conditions, we do not exclude or limit our liability for death
                or personal injury arising from our negligence, for any
                fraudulent misrepresentation made by us on the Site or for any
                other statutory rights which are not capable of being excluded.
              </p>
              <p dir="ltr">
                (f) Any exclusions and limitations of liability in these terms
                shall be subject to the Additional Terms in respect of matters
                covered by those Additional Terms and as otherwise required by
                law.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="15">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                15. GENERAL
              </p>
              <p dir="ltr" className="my-3">
                (a) These terms are dated April 9, 2025. No changes to these
                terms are valid or have any effect unless agreed by us in
                writing. We reserve the right to vary these terms and conditions
                from time to time. Our new terms will be displayed on the Site
                and by continuing to use and access the Site following such
                changes, you agree to be bound by any variation made by us. It
                is your responsibility to check these terms and conditions from
                time to time to verify such variations.
              </p>
              <p dir="ltr" className="my-3">
                (b) Unless otherwise expressly stated in these terms and
                conditions, all notices from you to us must be in writing and
                sent to our contact address at{" "}
                <a href="mailto:info@meinhaus.ca">info@meinhaus.ca</a>and all
                notices from us to you will be displayed on our website from to
                time.
              </p>
              <p dir="ltr" className="my-3">
                (c) We shall have no liability to you for any breach of these
                terms caused by any event or circumstance beyond our reasonable
                control including, without limitation, strikes, lock-outs and
                other industrial disputes, breakdown of systems or network
                access, flood, fire, explosion or accident.
              </p>
              <p dir="ltr" className="my-3">
                (d) If any part of these terms and conditions is unenforceable
                (including any provision in which we exclude or limit our
                liability to you) the enforceability of any other part of these
                terms and conditions will not be affected. If we choose not to
                enforce any right that we have against you at any time, then
                this does not prevent us from later deciding to exercise or
                enforce that right.
              </p>
              <p dir="ltr" className="my-3">
                (e) These terms and conditions together with the Privacy
                Statement and any applicable Additional Terms contain the entire
                understanding and agreement between us and you in relation to
                your use of the Site and supersede and replace any
                representation, statement or other communication (whether
                written or otherwise) made by you or us which is not contained
                herein. Save for fraud or fraudulent misrepresentation, we shall
                have no liability for any such representation being untrue or
                misleading.
              </p>
              <p dir="ltr" className="my-3">
                (f) You may not assign, sublicense or otherwise transfer any of
                your rights and obligations in these terms to any other person.
              </p>
              <p dir="ltr" className="my-3">
                (g) These terms and conditions shall be construed in accordance
                with and governed by the laws in effect within the Province of
                Ontario.&nbsp;
              </p>
              <p dir="ltr">
                (h) The parties acknowledge that they have required that these
                terms and conditions and all related documents be prepared in
                English. Les parties reconnaissent avoir exigé que la présente
                convention et tous les documents connexes soient rédigés en
                anglais.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="16">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                16. CONDITIONS APPLICABLE TO HOMEOWNER CLIENTS
              </p>
              <p dir="ltr">(a) Definitions</p>
              <p dir="ltr" className="my-3">
                “Homeowner Client(s)” refers to a person who has entered into a
                service agreement with MEINHAUS for the provision of home
                improvement services
              </p>
              <p dir="ltr">
                “Job Scope” refers to the specific tasks, responsibilities, and
                expectations MEINHAUS agrees to provide the Homeowner
                Client&nbsp;
              </p>
              <p dir="ltr">
                "Project Site" refers to the physical location where
                construction activities, including excavation, building, and
                installation, are carried out, as specified in the project
                agreement
              </p>
              <p dir="ltr" className="my-3">
                (b) <strong>Project Site:</strong> Every Homeowner Client is
                responsible for ensuring a proposed Project Site is safe and
                compliant with all applicable municipal, regional, provincial,
                and federal regulations and laws.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (c) <strong>Quotes:</strong> Project quotes provided by MEINHAUS
                are prepared based on information provided by a Homeowner
                Client. Project quotes and estimates are subject to change at
                the discretion of MEINHAUS for undisclosed material facts,
                unaccounted-for circumstances, and additional work required.
                Homeowner Clients are solely responsible for paying any
                additional sums above the initial quote provided by
                MEINHAUS.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (d) <strong>Changes in Job Scope:</strong> MEINHAUS reserves the
                right to issue revised quotes for changes in Job Scope or
                conditions associated with a job. The issuance of a revised
                quote shall not operate as ground for termination of a contract
                entered into with MEINHAUS.&nbsp;&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (e) <strong>Failure to Disclose Project Site:</strong> MEINHAUS
                relies on the site conditions and job description provided for
                by a Homeowner Client in issuing quotes for each Project Site.
                MEINHAUS retains the right to charge a Homeowner Client for
                additional fees incurred due to lost time or rescheduling for a
                Homeowner Client failure to provide full and frank disclosure of
                the Project Site and work required at the Project Site.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (f) <strong>Cancellation Fees:</strong> MEINHAUS reserves the
                right to charge cancellation fees on projects cancelled without
                reasonable notice. Cancellations fees will take into
                consideration the service provided.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (g) <strong>Late Payment Fees:</strong> MEINHAUS reserves the
                right to charge interest and penalties on late payments
                made.&nbsp;
              </p>
              <p dir="ltr">
                (h) <strong>Change Order Fees:</strong> MEINHAUS reserves the
                right to charge fees for projects which require alterations to
                the proposed schedule or Job Scope.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="17">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                17. CONDITIONS APPLICABLE TO SUB-CONTRACTORS
              </p>
              <p dir="ltr">
                <strong>“Assigned Project”</strong> refers to a specific piece
                of work or activity that has been assigned to a Contractor
                Client for completion, with defined responsibilities and
                resources
              </p>
              <p dir="ltr" className="my-3">
                <strong>“Sub-contractor(s)”</strong> refers to the individual or
                organization that contracts with MEINHAUS to perform specific
                work or services at the direction of MEINHAUS&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                <strong>“Homeowner Client(s)”</strong> refers to a person who
                has entered into a service agreement with MEINHAUS for the
                provision of home improvement services
              </p>
              <p dir="ltr">
                <strong>"Project Site"</strong> refers to the physical location
                where construction activities, including excavation, building,
                and installation, are carried out, as specified in the project
                agreement
              </p>
              <p dir="ltr" className="my-3">
                (a) Media and Advertising. MEINHAUS retains the right to
                transmit or post for submission all digital media produced or
                acquired by a Sub-contractor during an Assigned Project.
                MEINHAUS retains the right to use any such information in any
                manner MEINHAUS deems fit (including reproduction, transmission,
                publication, broadcast, and posting on any media and anywhere in
                the world) on a free of charge basis. MEINHAUS shall not be
                subject to any obligation of confidentiality nor be liable for
                any use and/or disclosure of such submissions.
              </p>
              <p dir="ltr" className="my-3">
                (b) Conduct. In completing an Assigned Project, Sub-contractors
                must adhere to MEINHAUS Code of Conduct.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (c) Zero Tolerance for Illicit Substances. Sub-contractors that
                are working on an Assigned Project shall maintain a drug-free
                and alcohol-free Project Site.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (d) Intellectual Property. The Sub-contractor assigns to
                MEINHAUS all right, title, and interest in and to any and all
                intellectual property, including but not limited to patents,
                copyrights, trademarks, trade secrets, and other proprietary
                information, created or developed by the Sub-contractor in
                connection with their Assigned Project with MEINHAUS. This
                assignment includes all rights, whether created during the
                Sub-contractors work hours or outside of work hours, if the
                Sub-contractor uses MEINHAUS resources or facilities in doing
                so.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p dir="ltr" className="my-1">
                (e) Self-Promotion. Sub-contractors shall not use MEINHAUS
                logos, branding, trademarks, or other intellectual property for
                self-promotion without the prior written consent of
                MEINHAUS.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (f) Non-Solicitation of Homeowner Clients. For a period of five
                (5) years following the completion of an Assigned Project, the
                Sub-contractor shall not&nbsp; (except on behalf of or with the
                prior written consent of MEINHAUS) directly or indirectly
                solicit any individual or entity which was a Homeowner Client of
                MEINHAUS or any of its Affiliates for the purpose of providing a
                service or product to such Homeowner Client which is the same
                type of service or product offered or provided by MEINHAUS or
                any of its Affiliates.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (g) Payment Terms. Payment to a Sub-contractor for work
                performed and completed for an Assigned Project shall be
                released upon confirmation from MEINHAUS and Homeowner Clients
                that the Assigned Project was completed to their mutual
                satisfaction.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (h) Cancellation Fees. MEINHAUS reserves the right to charge a
                cancellation fee to the Sub-contractor for their cancellation of
                an Assigned Project or for failure to meet commitments for an
                Assigned Project.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (i) Delays. MEINHAUS reserves the right to charge late fees and
                penalty fees for delays caused by and in the control of
                Sub-contractor.&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                (j) Independent Contractor. Sub-contractors are independent
                contractors of MEINHAUS, and neither party is an agent or
                partner of the other. Neither party will have, and neither party
                will represent to any third party that it has, any authority to
                act on behalf of the other party.&nbsp;
              </p>
              <p dir="ltr">(k) Bids for Assigned Projects.&nbsp;</p>
            </li>
          </ol>
          <p>&nbsp;</p>
          <ol start="18">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                18. DISPUTE RESOLUTION
              </p>
              <p dir="ltr">
                Subject to any exceptions specified in these Terms and
                Conditions, if you and MEINHAUS are unable to resolve any
                dispute through informal discussion, then you and MEINHAUS agree
                to submit the issue first before a non-binding mediator and to
                an arbitrator in the event that mediation fails. The decision of
                the arbitrator will be final and binding. Any mediator or
                arbitrator must be a neutral party acceptable to both you and
                MEINHAUS. The costs of any mediation or arbitration will be paid
                by the unsuccessful party.&nbsp;&nbsp;
              </p>
              <p dir="ltr" className="my-3">
                We each agree that any dispute resolution proceedings will be
                conducted only on an individual basis and not in a class,
                consolidated or representative action. If for any reason a claim
                proceeds in court rather than in arbitration we each waive any
                right to a jury trial. We also both agree that you or we may
                bring suit in court to enjoin infringement or other misuse of
                intellectual property rights.
              </p>
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="19">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                20. REFUNDS FOR SERVICES
                <br />
              </p>
              MEINHAUS is not a party or partner to any contract, or agreement
              which has been facilitated between purchasing consumers and
              independent contractors. MEINHAUS reserve the right at any time to
              arbitrate disputes between service providers and consumers,
              including but not limited to releasing of funds to contractor,
              where deemed necessary, return of subscription fees, or refunds to
              purchasing consumers at its sole discretion.
            </li>
          </ol>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <ol start="20">
            <li dir="ltr" aria-level="1">
              <p
                dir="ltr"
                role="presentation"
                className="font-semibold text-[#262626] my-2 text-xl"
              >
                CONTACT INFORMATION
              </p>
              <p dir="ltr">
                You can contact MEINHAUS by any of the following methods:
              </p>
              <p dir="ltr">
                Email:{" "}
                <a href="mailto:info@meinhaus.ca" className="text-blue-400">
                  info@meinhaus.ca
                </a>
                &nbsp;
              </p>
              <p dir="ltr">Telephone: 647-930-9066</p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default CustomerTermsAndConditions;
