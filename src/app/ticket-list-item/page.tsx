import { TicketListItem } from "@/components/ticket-list-item";
import { Separator } from "@/components/ui/separator";

export default function TicketListItemPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Ticket List Item</h1>
        <p className="text-muted-foreground">
          A detailed list item component designed for tickets, reservations, or events.
        </p>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Variants</h2>
        
        {/* Standard Variant */}
        <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
          <TicketListItem />
        </div>

        {/* Variants Showcase */}
        <div className="space-y-4">
            <TicketListItem 
                title="Design System Conference 2026"
                date="MAY 15"
                time="09:00 AM"
                location="San Francisco, CA"
                price="$299.00"
                status="fast-selling"
            />
             <TicketListItem 
                title="React Advanced Workshop"
                date="JUN 02"
                time="13:00 PM"
                location="Online Event"
                price="$50.00"
            />
             <TicketListItem 
                title="Tech Networking Night"
                date="JUL 20"
                time="18:30 PM"
                location="Rooftop Bar, NYC"
                price="$0.00"
                status="sold-out"
            />
        </div>
      </div>
    </div>
  );
}
