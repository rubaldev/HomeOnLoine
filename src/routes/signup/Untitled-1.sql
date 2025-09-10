-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.files (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  file_url text NOT NULL,
  folder_id uuid,
  owner_id uuid,
  size_bytes bigint,
  type text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT files_pkey PRIMARY KEY (id),
  CONSTRAINT files_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.profiles(id),
  CONSTRAINT files_folder_id_fkey FOREIGN KEY (folder_id) REFERENCES public.folders(id)
);
CREATE TABLE public.folders (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner_id uuid,
  parent_id uuid,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT folders_pkey PRIMARY KEY (id),
  CONSTRAINT folders_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.folders(id),
  CONSTRAINT folders_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  username text UNIQUE,
  avatar_url text,
  role text DEFAULT 'member'::text,
  bio text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.shared_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  item_type text CHECK (item_type = ANY (ARRAY['file'::text, 'folder'::text])),
  item_id uuid NOT NULL,
  shared_with uuid,
  permission text CHECK (permission = ANY (ARRAY['read'::text, 'write'::text])),
  shared_at timestamp with time zone DEFAULT now(),
  CONSTRAINT shared_items_pkey PRIMARY KEY (id),
  CONSTRAINT shared_items_shared_with_fkey FOREIGN KEY (shared_with) REFERENCES public.profiles(id)
);
CREATE TABLE public.tasks (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  assigned_to uuid,
  title text NOT NULL,
  description text,
  status text DEFAULT 'todo'::text CHECK (status = ANY (ARRAY['todo'::text, 'in_progress'::text, 'done'::text])),
  due_date date,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT tasks_pkey PRIMARY KEY (id),
  CONSTRAINT tasks_assigned_to_fkey FOREIGN KEY (assigned_to) REFERENCES public.profiles(id)
);