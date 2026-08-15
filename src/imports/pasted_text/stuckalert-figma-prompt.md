# MASTER FIGMA UI/UX DESIGN PROMPT — STUCKALERT

## 1. DESIGN THE PRODUCT

Create a premium, futuristic, production-ready SaaS UI/UX for **StuckAlert**, an intelligent e-commerce delivery monitoring and proactive customer-retention platform.

StuckAlert connects Shopify/WooCommerce stores with multiple shipping carriers, normalizes carrier tracking data, detects stuck or delayed packages, and helps merchants intervene before a shipping problem becomes a customer complaint, support ticket, chargeback, or Return-to-Origin event.

The interface must communicate:

**LIVE DELIVERY INTELLIGENCE + EARLY WARNING + AUTOMATION + CUSTOMER RETENTION**

Do NOT design this as a conventional admin dashboard.

The visual concept should feel like:

> **“Air-traffic control for e-commerce deliveries.”**

The user should immediately feel that they are looking at a live operational system monitoring thousands of packages and identifying problems before they become serious.

---

# 2. BRAND DIRECTION

## Product Name

Primary name:

**StuckAlert**

Recommended visual treatment:

**STUCK** in strong typography
**ALERT** as the intelligent/highlighted portion

Possible brand tagline:

**“Catch delivery problems before customers do.”**

Alternative tagline:

**“Turn delivery delays into customer retention.”**

The second tagline should be used on marketing/landing pages while the first can be used inside the application.

---

# 3. LOGO CONCEPT

Create a distinctive modern logo instead of using a generic package or bell icon.

### Logo concept: “Signal Parcel”

Combine:

* a simplified package/container shape
* a location/tracking signal
* an alert pulse
* a subtle directional arrow

The icon should visually communicate:

**PACKAGE + SIGNAL + EARLY WARNING**

Avoid:

* generic bell logos
* generic truck logos
* generic warning triangles
* generic cube/package icons
* overly complicated logistics illustrations

The logo should work in:

* full-color version
* monochrome version
* favicon
* mobile app icon
* dark background
* light background

Create a geometric symbol that can stand independently from the wordmark.

---

# 4. VISUAL IDENTITY

Use a premium **dark intelligent-operations aesthetic**.

The core visual language should combine:

* deep graphite background
* near-black surfaces
* electric blue/cyan data accents
* controlled violet highlights
* warm amber/orange for warnings
* red only for critical delivery exceptions
* soft white typography

Do not overuse gradients.

Use gradients primarily for:

* hero visualizations
* active data states
* 3D objects
* glowing indicators
* charts
* important CTA elements

The overall interface should feel sophisticated rather than flashy.

Reference feeling:

**Stripe-level SaaS polish + Linear-level interface quality + futuristic logistics control room.**

Do NOT copy those products. Use only the level of refinement as inspiration.

---

# 5. 3D DESIGN LANGUAGE

Introduce subtle 3D elements throughout the product.

The 3D style should be:

**minimal + premium + functional**

Not cartoonish.

Create a 3D “shipment network” visualization where:

* packages appear as small floating nodes
* carriers appear as larger network hubs
* routes appear as thin glowing paths
* delayed shipments create pulsing warning zones
* successful deliveries move toward destination nodes
* exception shipments visually separate from normal shipments

Use depth, shadows, blur and perspective to create a spatial interface.

Example visual concept:

A floating 3D logistics globe/network in the dashboard hero area with hundreds of tiny shipment nodes moving through routes.

Do not make the entire UI 3D.

Use 3D selectively so the interface remains usable.

---

# 6. MOTION SYSTEM

The website must NOT feel static.

Create a sophisticated motion system.

### Background motion

Use subtle animated:

* particles
* data lines
* shipment paths
* tiny tracking nodes
* ambient gradient movement
* floating geometric elements

Motion must be slow and elegant.

Never use distracting continuous animations everywhere.

### Dashboard motion

When shipment data changes:

* status indicators softly pulse
* counters animate upward/downward
* risk scores transition smoothly
* charts draw themselves
* shipment cards enter with subtle motion
* alert cards glow briefly when a new exception appears

### Shipment tracking motion

When a package moves:

**Origin → Sorting Hub → Transit → Local Hub → Out for Delivery → Delivered**

Animate the shipment marker along the route.

When an exception occurs:

* route changes visually
* marker pauses
* warning pulse appears
* exception card slides into the alert panel

---

# 7. DESIGN SYSTEM

Create a complete reusable Figma design system.

Include:

### Typography

Use a modern geometric sans-serif.

Recommended:

**Inter / Geist / Manrope**

Use:

* bold display typography
* medium UI headings
* highly readable body text
* compact numerical typography for analytics

Large KPI numbers should have strong visual hierarchy.

---

# 8. COLOR SYSTEM

### Core

Background:
Near-black / deep graphite

Surface:
Dark charcoal

Elevated Surface:
Slightly lighter graphite

Primary:
Electric cyan/blue

Secondary:
Violet

Success:
Emerald/green

Warning:
Amber/orange

Critical:
Red/coral

Neutral:
Cool gray

Use color semantically.

Do not make every component colorful.

---

# 9. GLOBAL APPLICATION SHELL

Design a persistent application layout.

### Left sidebar

Logo at top.

Navigation:

**Overview**

**Shipments**

**Exceptions**

**Customers**

**Automation**

**Carriers**

**Analytics**

**Integrations**

**Settings**

Bottom:

* Help
* System status
* Workspace selector
* User profile

Sidebar should support collapsed mode.

Collapsed mode shows icons only.

---

# 10. TOP NAVIGATION

Top navigation should include:

* global search
* date/time context
* live system status
* notifications
* workspace selector
* user profile

Search should support:

* order ID
* tracking number
* customer name
* carrier

Use command-palette behavior.

Keyboard shortcut:

**⌘ / Ctrl + K**

---

# 11. MAIN DASHBOARD — “CONTROL CENTER”

The dashboard is the most important screen.

Create a highly visual operations control center.

### Header

Title:

**Delivery Control Center**

Subtitle:

**Real-time visibility across your entire fulfillment network.**

Top-right:

* date range
* refresh
* export
* live status indicator

---

# 12. HERO KPI AREA

Create 4–5 high-impact KPI cards.

Example:

### Active Shipments

**12,842**

+8.4%

### At Risk

**286**

2.2% of active shipments

### Delivery Exceptions

**74**

↓ 18% this week

### RTO Risk

**41**

$8,420 estimated exposure

### WISMO Avoided

**1,284**

This month

Each card should contain:

* number
* trend
* small sparkline
* status indicator
* subtle visual depth

Make KPI cards feel like floating glass/solid surfaces.

---

# 13. LIVE SHIPMENT NETWORK

Make this the visual centerpiece.

Create a large interactive visualization.

Possible concept:

### “Live Network”

Display:

* shipment nodes
* origin nodes
* carrier hubs
* destination clusters
* active routes

Show filters:

**All | At Risk | Delayed | Out for Delivery | Delivered**

Hovering over a node should reveal:

* order number
* customer
* carrier
* current location
* transit time
* status
* risk level

---

# 14. EXCEPTION RADAR

Create a unique visualization called:

**Exception Radar**

Instead of another ordinary table, visualize delivery problems as a radar/priority field.

Center:

**NETWORK HEALTH**

Around it:

* Delayed
* No Scan
* Failed Attempt
* Address Issue
* Weather
* Carrier SLA Risk

Critical problems move closer to the center.

Clicking an exception opens the shipment details.

---

# 15. “WHAT NEEDS ATTENTION” PANEL

Create an intelligent priority feed.

Title:

**Needs Attention**

Cards should say things like:

**18 shipments have had no scan for 48+ hours**

**7 failed delivery attempts require address verification**

**DHL performance dropped 12% today**

**3 shipments are approaching RTO risk**

Each item includes:

* severity
* affected shipment count
* estimated business impact
* recommended action
* CTA

Example CTA:

**Review 18 shipments**

---

# 16. SHIPMENT TABLE

Create a powerful data table.

Columns:

* Order
* Customer
* Carrier
* Tracking
* Status
* Transit Time
* Last Scan
* Risk
* Action

Status pills:

LABEL CREATED
IN TRANSIT
DELIVERY EXCEPTION
OUT FOR DELIVERY
FAILED ATTEMPT
DELIVERED

These six normalized shipment states must remain consistent throughout the application because they are explicitly defined in the PRD.

Use intelligent row highlighting.

Do not make the table visually boring.

Allow:

* sorting
* filtering
* bulk selection
* column customization
* saved views
* search
* export

---

# 17. SHIPMENT DETAILS EXPERIENCE

When a shipment is opened, do not simply open a generic modal.

Create a full **Shipment Command Center**.

Header:

**Order #STK-48291**

Show:

* customer
* carrier
* tracking number
* destination
* risk score
* current status

---

# 18. 3D SHIPMENT JOURNEY

Create a horizontal or slightly curved 3D journey.

Example:

**Order Created**

↓

**Carrier Picked Up**

↓

**Sorting Facility**

↓

**Transit**

↓

**Local Hub**

↓

**Out for Delivery**

↓

**Delivered**

The current position should glow.

Completed steps should appear visually settled.

Future steps should appear muted.

Exception points should appear as warning nodes.

---

# 19. TRACKING TIMELINE

Create a detailed vertical timeline.

Each event contains:

* timestamp
* location
* raw carrier status
* normalized status
* carrier
* event description

Example:

**Aug 15 — 10:32 AM**

Lahore Distribution Center

Raw status:

“Shipment held at destination facility”

Normalized:

**DELIVERY_EXCEPTION**

This reflects the PRD's tracking-log model, where raw carrier statuses are stored alongside normalized statuses, locations, and event timestamps.

---

# 20. RISK INTELLIGENCE

Give every shipment a visual risk score.

Example:

**RISK SCORE**

82 / 100

**HIGH RISK**

Factors:

* No scan for 52 hours
* Carrier delay
* Delivery SLA exceeded
* Customer location mismatch

Show a circular/radial risk visualization.

Make it visually understandable without requiring the user to read every detail.

---

# 21. EXCEPTIONS PAGE

Create a dedicated command center for exceptions.

Header:

**Exception Center**

Top metrics:

* Total exceptions
* Critical
* Aging >48h
* Failed attempts
* RTO risk

Use a priority-based interface.

Sections:

**Critical Now**

**Needs Review**

**Monitoring**

**Resolved**

---

# 22. FAILED DELIVERY / NDR EXPERIENCE

Create a highly polished workflow for failed deliveries.

Example:

**Delivery Attempt Failed**

Customer:

Sarah Khan

Order:

#STK-48291

Reason:

**Customer unavailable**

Risk:

**High**

Then show:

### Recommended Action

**Send WhatsApp address verification**

CTA:

**Send Verification**

Secondary:

**View Customer**

After sending:

**Verification link sent**

Status changes to:

**Awaiting customer confirmation**

This directly supports the PRD's automated failed-attempt address re-verification workflow.

---

# 23. AUTOMATION CENTER

Create a visual workflow builder.

Title:

**Automation Studio**

Instead of plain settings forms, create node-based automation.

Example:

**WHEN**

Shipment has no scan

↓

**FOR**

48 hours

↓

**CHECK**

Carrier = DHL

↓

**THEN**

Send Slack alert

↓

**AND**

Create exception

↓

**IF**

Failed delivery

↓

**SEND**

WhatsApp verification

Use animated connectors.

Nodes should have subtle 3D depth.

---

# 24. AUTOMATION TEMPLATE CARDS

Create ready-made automation templates.

Examples:

### No-Scan Guardian

Trigger alert after 48h without tracking movement.

### Failed Delivery Rescue

Send customer verification automatically.

### RTO Prevention

Escalate shipments approaching RTO risk.

### Carrier SLA Watchdog

Alert operations when carrier performance drops.

### VIP Customer Protection

Prioritize exceptions involving high-value customers.

---

# 25. CARRIER PERFORMANCE PAGE

Create a premium analytics dashboard.

Title:

**Carrier Intelligence**

Show:

* average delivery time
* delay %
* exception %
* RTO %
* successful delivery %
* SLA compliance

Use interactive charts.

Create a visual carrier leaderboard:

**1. DHL**

98.2% SLA

**2. FedEx**

96.8% SLA

**3. Trax**

94.1% SLA

**4. Leopard**

91.7% SLA

These carrier examples are aligned with the PRD's stated multi-carrier architecture.

---

# 26. CARRIER “HEALTH” VISUALIZATION

Instead of only tables, create a circular carrier health visualization.

Example:

**DHL**

● Excellent

**98%**

**FedEx**

● Healthy

**96%**

**Leopard**

● Watch

**91%**

Hovering should show detailed metrics.

---

# 27. INTEGRATIONS PAGE

Make integrations visually attractive.

Large cards:

### Shopify

Connected

### WooCommerce

Connected

### DHL

Connected

### FedEx

Connected

### Trax

Connected

### Leopard

Connected

### WhatsApp

Connected

### Slack

Connected

### Telegram

Connected

Each card should have:

* logo
* connection status
* last sync
* configure button

Include a futuristic animated “connection network” visual in the background.

---

# 28. ONBOARDING EXPERIENCE

The onboarding flow must feel extremely simple.

The PRD requires the store connection to be possible in under two minutes.

Design onboarding as:

### Step 01

**Connect your store**

Shopify / WooCommerce

↓

### Step 02

**Connect carriers**

Select carriers

↓

### Step 03

**Configure alerts**

Choose channels

↓

### Step 04

**You're protected**

Show animated network activation.

Final screen:

**StuckAlert is now watching your deliveries.**

Show:

**0 → 12,482 shipments monitored**

with an animated counter.

---

# 29. LANDING PAGE

Create a premium marketing website separate from the application dashboard.

Hero:

**Catch delivery problems before customers do.**

Subheading:

**StuckAlert monitors every shipment, detects delivery exceptions early, and automatically helps recover at-risk orders.**

Primary CTA:

**Start Monitoring**

Secondary CTA:

**See How It Works**

Hero visual:

A cinematic 3D shipment network.

Packages move along glowing routes.

One package suddenly turns amber.

StuckAlert detects it.

A notification appears:

**Exception detected — 52h without scan**

Then another:

**Customer intervention recommended**

This animation should communicate the product's value without requiring explanation.

---

# 30. LANDING PAGE SECTIONS

Create:

### Problem

**Customers don't complain when the package is late.
They complain when nobody tells them.**

### Solution

**Detect → Understand → Act → Retain**

### Live Network

Interactive shipment visualization.

### Automation

Show automation workflows.

### Analytics

Show carrier intelligence.

### Integrations

Shopify / WooCommerce / carriers / messaging platforms.

### Results

Show metrics such as:

**35–45%**

potential WISMO reduction target

**25%+**

failed-delivery recovery target

**99%+**

status-normalization accuracy target

These metrics come from the PRD's defined success KPIs.

---

# 31. UNIQUE VISUAL IDEA — “DELIVERY PULSE”

Create a global animated pulse system.

Every shipment generates a tiny pulse.

Normal:

small blue pulse

At risk:

amber pulse

Critical:

red pulse

Delivered:

green pulse

The dashboard background can subtly react to the overall health of the delivery network.

Example:

Healthy network:

calm, slow pulses

Unhealthy network:

more frequent warning activity

This becomes a signature visual identity for StuckAlert.

---

# 32. UNIQUE VISUAL IDEA — “TIME TO RISK”

Create a horizontal risk timeline.

Example:

**0h**

Normal

→

**24h**

Monitoring

→

**48h**

Exception

→

**72h**

Critical

→

**RTO**

At Risk

Use an animated marker showing where the current shipment sits.

This makes the concept of “stuck” immediately understandable.

---

# 33. UNIQUE VISUAL IDEA — “EXCEPTION GRAVITY”

Create a visualization where exceptions appear as objects pulled toward a central “Risk Core.”

The more severe the exception:

* larger object
* closer to center
* stronger pulse
* higher priority

This can become the signature visualization of the Exception Center.

---

# 34. EMPTY STATES

Do not use boring:

“No data available.”

Create intelligent empty states.

Example:

**Your network is quiet.**

No delivery exceptions detected.

**1,248 shipments are moving normally.**

Include a subtle animated shipment network.

---

# 35. LOADING STATES

Use skeletons plus subtle animated data pulses.

Avoid generic spinning loaders.

Example:

**Synchronizing carrier network...**

Animated nodes connect together.

Then:

**2,842 shipments synchronized**

---

# 36. SUCCESS STATES

Use subtle celebration, not excessive confetti.

Example:

**Exception resolved**

Package:

#STK-48291

Customer confirmed their delivery address.

**RTO prevented.**

Animate the shipment node moving back onto the normal delivery route.

---

# 37. NOTIFICATION SYSTEM

Design notification center with priority levels.

### Critical

**RTO risk detected**

### Warning

**No scan for 48 hours**

### Information

**Shipment delivered**

### Success

**Customer verified address**

Notifications should include:

* timestamp
* shipment
* reason
* action

---

# 38. RESPONSIVE DESIGN

Create desktop-first UI but fully design:

### Desktop

1440px / 1280px

### Tablet

1024px / 768px

### Mobile

390px / 375px

On mobile:

* sidebar becomes bottom navigation or drawer
* shipment table becomes cards
* visualizations become horizontally scrollable
* KPI cards become swipeable
* critical alerts remain immediately accessible

---

# 39. MICRO-INTERACTIONS

Include:

* button hover depth
* icon rotation
* status pulse
* card elevation
* smooth modal transitions
* chart hover
* timeline reveal
* route animation
* success transitions
* filter transitions
* search command palette
* notification slide-in
* sidebar collapse animation

All animation should feel intentional.

---

# 40. ACCESSIBILITY

Maintain:

* WCAG-conscious contrast
* keyboard navigation
* visible focus states
* semantic status indicators
* icons + text rather than color alone
* readable typography
* reduced-motion alternative

Do not rely solely on red/green colors for shipment states.

---

# 41. FIGMA COMPONENT LIBRARY

Create reusable components for:

* buttons
* inputs
* dropdowns
* search
* filters
* badges
* status pills
* KPI cards
* shipment cards
* tables
* timeline events
* alerts
* notifications
* modals
* drawers
* charts
* maps
* 3D visual containers
* navigation
* breadcrumbs
* tooltips
* empty states
* loading states
* success states

Use Auto Layout.

Use Variables.

Use component variants.

Use consistent spacing tokens.

---

# 42. DESIGN TOKENS

Create variables for:

### Spacing

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

### Radius

8 / 12 / 16 / 24 / 32

### Typography

Display / H1 / H2 / H3 / Body / Small / Caption

### Elevation

Surface / Elevated / Floating / Modal

### Motion

Fast / Normal / Slow / Ambient

---

# 43. CORE USER FLOWS

Prototype these flows in Figma.

### Flow 1 — First-Time Setup

Landing Page

→ Sign Up

→ Connect Shopify

→ Connect Carrier

→ Configure Alerts

→ Dashboard

### Flow 2 — Exception Detection

Dashboard

→ Exception Alert

→ Shipment Details

→ Risk Analysis

→ Recommended Action

→ Resolve

### Flow 3 — Failed Delivery

Exception Center

→ Failed Attempt

→ Customer Details

→ Send WhatsApp Verification

→ Customer Confirms

→ Shipment Recovered

### Flow 4 — Carrier Analysis

Dashboard

→ Carrier Intelligence

→ Select Carrier

→ Performance Analysis

→ Identify SLA Problem

→ Create Automation

---

# 44. FIGMA PROTOTYPE REQUIREMENTS

Prototype interactions should demonstrate:

* navigation
* dashboard filtering
* shipment search
* shipment detail opening
* timeline interaction
* exception resolution
* WhatsApp verification action
* automation builder
* carrier analytics
* integration connection
* onboarding
* responsive states

Use realistic transitions.

Avoid unnecessary animation that slows navigation.

---

# 45. DESIGN PERSONALITY

StuckAlert should feel:

**Intelligent**
**Fast**
**Predictive**
**Trustworthy**
**Operational**
**Premium**
**Technical**
**Calm under pressure**

It should NOT feel:

* childish
* generic
* overly corporate
* template-generated
* cluttered
* crypto-like
* gaming-oriented
* excessively neon

---

# 46. FINAL VISUAL NORTH STAR

The final product should feel like:

> **A futuristic command center where an e-commerce operations team can see every shipment, understand which ones are becoming dangerous, and take action before customers notice the problem.**

The interface should communicate information through:

**Motion + spatial visualization + hierarchy + intelligent alerts**

rather than relying only on:

**tables + cards + charts.**

Create a visually distinctive SaaS product that could realistically compete with premium logistics and e-commerce operations software.

Prioritize usability first, then visual sophistication.

Use 3D and motion as functional storytelling—not decoration.

---

# 47. REQUIRED FIGMA SCREENS

Generate designs for at least:

1. Landing Page
2. Login
3. Sign Up
4. Onboarding
5. Connect Store
6. Connect Carrier
7. Main Dashboard
8. Exception Center
9. Shipment List
10. Shipment Details
11. Shipment Tracking Timeline
12. Failed Delivery / NDR
13. Automation Center
14. Automation Builder
15. Carrier Intelligence
16. Carrier Details
17. Integrations
18. Notifications
19. Analytics
20. Settings
21. Profile / Workspace
22. Empty States
23. Loading States
24. Error States
25. Mobile Dashboard
26. Mobile Shipment Details

---

# 48. FINAL Figma INSTRUCTION

Do not generate a generic SaaS template.

Do not simply place cards on a grid.

Develop a **new visual language specifically for StuckAlert** around the concept of:

**LIVE DELIVERY SIGNALS**

Every important interaction should reinforce the idea that StuckAlert is constantly watching the delivery network.

The final design should be:

**3D + cinematic + intelligent + operational + highly usable + responsive + motion-rich + premium SaaS**

with a strong visual identity that users can recognize immediately as **StuckAlert**.
