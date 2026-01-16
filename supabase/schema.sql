-- Create a table for storing UI components
create table components (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  code text not null, -- The actual React component code
  dependencies text[], -- Array of dependencies e.g., ['lucide-react', 'framer-motion']
  tags text[], -- Array of tags e.g., ['button', 'input', 'animation']
  category text -- e.g., 'marketing', 'application', 'ecommerce'
);

-- Enable Row Level Security (RLS)
alter table components enable row level security;

-- Create policies
-- Allow anyone to read components (public view)
create policy "Public components are viewable by everyone"
  on components for select
  using ( true );

-- Block public inserts/updates to prevent spam
create policy "Disable public changes"
  on components for insert
  with check ( false );
