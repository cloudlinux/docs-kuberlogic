(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{360:function(e,a,t){"use strict";t.r(a);var r=t(32),i=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"live-patching-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#live-patching-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Live Patching Services")]),e._v(" "),t("p",[e._v("As part of Live Patching Services, TuxCare provides the following:")]),e._v(" "),t("ul",[t("li",[e._v("KernelCare Enterprise")]),e._v(" "),t("li",[e._v("LibraryCare")]),e._v(" "),t("li",[e._v("KernelCare for IOT")]),e._v(" "),t("li",[e._v("QEMUCare (Available in Q3 2021)")]),e._v(" "),t("li",[e._v("DatabaseCare (Available in Q3 2021)")])]),e._v(" "),t("h2",{attrs:{id:"kernelcare-enterprise"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-enterprise","aria-hidden":"true"}},[e._v("#")]),e._v(" KernelCare Enterprise")]),e._v(" "),t("p",[e._v("Automated live patching for Linux kernels with centralized management and common automation and vulnerability management tools integration.")]),e._v(" "),t("ul",[t("li",[e._v("rebootless Linux kernel patching and custom patching. For a complete list of supported kernels and patches, "),t("a",{attrs:{href:"https://patches.kernelcare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("private patch server for gated infrastructures – "),t("a",{attrs:{href:"https://docs.kernelcare.com/kernelcare-enterprise/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ePortal"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("out-of-the-box integration with patch management and vulnerability assessment tools")])]),e._v(" "),t("h2",{attrs:{id:"librarycare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#librarycare","aria-hidden":"true"}},[e._v("#")]),e._v(" LibraryCare")]),e._v(" "),t("p",[e._v("Formerly known as KernelCare+, LibraryCare detect and updates shared libraries in-memory without disrupting the applications using them.")]),e._v(" "),t("h3",{attrs:{id:"how-librarycare-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-librarycare-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How LibraryCare works")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("The patch is created by the KernelCare team")]),e._v(".")]),e._v(" "),t("p",[e._v("A library’s source code–both original and patched–are translated into assembly language. These files are compared, and the new patched code is put in a new section of the same ELF file. After the code is compiled and linked, the patch is extracted from the resulting binaries. The patch files are extracted from the ELF sections.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("The patch is uploaded to the patch server")]),e._v(".")]),e._v(" "),t("p",[e._v("The binary files are treated as a single patch, which is then uploaded to a dedicated KernelCare patch server. The patch server then distributes the patch to customers’ servers.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("The patch is downloaded to the local agent")]),e._v(".")]),e._v(" "),t("p",[e._v("An agent program on each local server, "),t("code",[e._v("lcarectl")]),e._v(", “talks to” the patch server, which looks for known libraries on the local server. The agent program then downloads the patch needed for each library present on the local server.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("The patch is applied to the local server")]),e._v(".")]),e._v(" "),t("p",[e._v("Using Linux APIs, memory near a library is allocated, and the patch is copied into it. After ensuring that no threads are executing the old library code, the agent program reroutes calls from old code to the new patched versions via unconditional jumps.")])])]),e._v(" "),t("p",[e._v("For the LibraryCare technical documentation, "),t("a",{attrs:{href:"https://docs.kernelcare.com/kernelcare-plus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"kernelcare-for-iot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-for-iot","aria-hidden":"true"}},[e._v("#")]),e._v(" KernelCare for IOT")]),e._v(" "),t("p",[e._v("Provides live security patching for ARM64-based embedded systems for enterprise IoT users and original equipment manufacturers.")]),e._v(" "),t("p",[e._v("For the list of supported distributions and chipsets, "),t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/kernelcare-iot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"how-kernelcare-iot-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-kernelcare-iot-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How KernelCare IoT works")]),e._v(" "),t("ul",[t("li",[e._v("The KernelCare team is constantly monitoring security mailing lists to check for vulnerabilities. As soon as one is found, the team prepares a patch and then sends it to distribution servers.")]),e._v(" "),t("li",[e._v("An agent will run a process on your device, checking with the distribution servers every 4 hours until it finds a new patch and then safely apply it to the running kernel without needing to stop it.")]),e._v(" "),t("li",[e._v("A special kernel module is used to apply the patches. It first loads the update into the kernel address space, then it places relocations on the original code/data to make sure the code block doesn’t execute during the update. Once finished, it will safely switch the execution path from the original to the updated code and then make sure the old code will never run again.")]),e._v(" "),t("li",[e._v("KernelCare does all of this instantly, automatically, and without service interruptions.")])]),e._v(" "),t("p",[e._v("For more information about KernelCare for IOT, "),t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/kernelcare-iot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"qemucare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qemucare","aria-hidden":"true"}},[e._v("#")]),e._v(" QEMUCare")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),t("p",[e._v("Available in Q3 2021")])]),t("p",[e._v("QEMUCare – virtualization patching for cloud providers, VPS hosters, or any other company with QEMU based virtualization systems. It keeps infrastructure patched without disrupting virtual tenants’ systems.")]),e._v(" "),t("h3",{attrs:{id:"how-qemucare-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-qemucare-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How QEMUCare works")]),e._v(" "),t("ul",[t("li",[e._v("An agent is installed on each virtualization host which installs patches directly from the QEMUCare repository.")]),e._v(" "),t("li",[e._v("In an ePortal environment, your Virtualization Hosts communicate with the QEMUCare ePortal server that acts as an intermediary.")])]),e._v(" "),t("p",[e._v("You can "),t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/qemucare/#features",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign up for early access here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For more information about QEMUCare, "),t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/qemucare/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"databasecare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#databasecare","aria-hidden":"true"}},[e._v("#")]),e._v(" DataBaseCare")]),e._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),t("p",[e._v("Available in Q3 2021")])]),t("p",[e._v("DataBaseCare provides live patching for MySQL, MariaDB, PostgreSQL and other enterprise databases. It keeps your applications running while your database backend is being updated, enhancing security, availability and compliance.")]),e._v(" "),t("h3",{attrs:{id:"how-databasecare-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-databasecare-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How DataBaseCare works")]),e._v(" "),t("ul",[t("li",[e._v("An agent is installed on Database Servers which installs patches directly from our repository.")]),e._v(" "),t("li",[e._v("This agent is used to distribute and apply patches across all TuxCare products, so if you use more than one, you will still only have one agent running.")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/databasecare/#DBCare-contact-form",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contact TuxCare team for a free trial"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For more information about DataBaseCare, "),t("a",{attrs:{href:"https://tuxcare.com/live-patching-services/databasecare/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visit this page"),t("OutboundLink")],1),e._v(".")])])},[],!1,null,null,null);a.default=i.exports}}]);