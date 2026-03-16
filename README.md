# CampusFund – Web3 Campus Crowdfunding Platform

## What Was Built
A complete, production-ready campus crowdfunding platform with a blockchain-ready architecture. The frontend allows students and campus organizations to create fundraising campaigns, track contributions, and manage funding progress.

The application includes integrated APIs and placeholder blockchain functionality ready for backend integration with Algorand transactions.

---

## Architecture Overview

### Frontend (Next.js 16)
```text
├── UI Components (shadcn/ui)
├── State Management (React Context + SWR)
├── Form Handling (React Hook Form + Zod)
└── API Routes (Next.js API)
    ├── Campaigns CRUD
    ├── Contributions Management
    └── Wallet Utilities
        ↓
```

### Database (Prisma)
```text
├── SQLite (dev)
├── PostgreSQL (production)
└── Algorand SDK Integration Points
    ↓
```

### Blockchain Backend (Ready for Integration)
```text
├── Transaction Signing
├── Broadcasting
└── Confirmation Tracking
```

---

## Files Created & Core Configuration

- `package.json` – Updated dependencies
- `.env.example` – Environment configuration template
- `prisma/schema.prisma` – Database schema (Campaign, Contribution models)

### Frontend Pages
- `app/page.tsx` – Campaign dashboard
- `app/campaigns/new/page.tsx` – Create campaign page
- `app/campaigns/[id]/page.tsx` – Campaign details & contribution page
- `app/layout.tsx` – Root layout with providers

### Components
- `components/header.tsx` – Navigation header
- `components/campaign-card.tsx` – Campaign display card
- `components/campaign-form.tsx` – Campaign creation/edit form
- `components/contribution-form.tsx` – Contribution submission form
- `components/progress-bar.tsx` – Funding progress indicator
- `components/wallet-connect-button.tsx` – Wallet connection UI

### Backend APIs
- `app/api/campaigns/route.ts` – Get/create campaigns
- `app/api/campaigns/[id]/route.ts` – Get/update/delete campaign
- `app/api/contributions/route.ts` – Create contributions & build transactions
- `app/api/contributions/[campaignId]/route.ts` – Get contributions for campaign
- `app/api/wallet/route.ts` – Wallet utilities (validate, check status)

### Libraries & Utilities
- `lib/db.ts` – Prisma client instance
- `lib/algorand.ts` – Algorand SDK utilities
  - Transaction building (unsigned)
  - Address validation
  - Account information retrieval
  - Transaction status checking
- `lib/validators.ts` – Zod schemas for forms

### State Management
- `context/wallet-context.tsx` – Global wallet state
- `hooks/use-campaigns.ts` – Custom SWR hooks for data fetching

### Database
- `scripts/init-db.ts` – Database initialization script
- Prisma migrations (auto-generated)

### Documentation
- `LEGEND_README.md` – Complete documentation
- `BLOCKCHAIN_INTEGRATION.md` – Blockchain backend integration guide
- `QUICKSTART.md` – Get started in 5 minutes
- `PROJECT_SUMMARY.md` – This file

---

## Technology Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19 with shadcn/ui
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Forms:** React Hook Form + Zod
- **Data Fetching:** SWR
- **Icons:** Lucide React

### Backend
- **Database:** Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **API:** Next.js API Routes
- **Blockchain:** Algorand SDK + Pera Wallet integration ready

### DevOps
- **Package Manager:** pnpm / npm / yarn
- **Deployment:** Vercel ready
- **Type Safety:** TypeScript

---

## Database Schema

```text
Campaign
├── id (CUID)
├── title
├── description
├── targetAmount
├── raisedAmount
├── deadline
├── creatorWallet
├── createdAt
├── updatedAt
└── contributions[] (relation)

Contribution
├── id (CUID)
├── campaignId (FK)
├── amount
├── transactionHash
├── contributorWallet
├── timestamp
├── status (pending/confirmed/failed)
└── campaign (relation)
```

---

## API Endpoints

### Campaigns
- **`GET /api/campaigns?walletAddress=ADDR`** – Get campaigns created by user
- **`POST /api/campaigns`** – Create campaign
- **`GET /api/campaigns/[id]`** – Get campaign details
- **`PUT /api/campaigns/[id]`** – Update campaign
- **`DELETE /api/campaigns/[id]`** – Delete campaign

### Contributions
- **`POST /api/contributions`** – Create/build contribution
  - `action=buildTransaction` – Get unsigned transaction
  - `action=recordContribution` – Record contribution after signing
- **`GET /api/contributions/[campaignId]`** – Get contributions for campaign

### Wallet Utilities
- **`GET /api/wallet?action=validateAddress&address=ADDR`**
- **`GET /api/wallet?action=getAccountInfo&address=ADDR`**
- **`GET /api/wallet?action=checkTransaction&txId=ID`**
