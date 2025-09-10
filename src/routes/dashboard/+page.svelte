<script>
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { toast } from "svelte-sonner";
  import { addFile, getFiles } from "./dashboard.remote";
  let { data } = $props();
  // let files = data.files;
  let files = getFiles();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header
      class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear reltive"
    >
      <div class="flex items-center gap-2 px-4">
        <Sidebar.Trigger class="-ml-1" />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Page class="text-2xl font-bold"
                >Dashboard</Breadcrumb.Page
              >
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
        <Button
          class="ml-190"
          onclick={async () => {
            try {
              await addFile();
              toast("envoi des donnés reaçus!!");
            } catch (error) {
              toast(
                "une chose n'a pas bien marché verifier votre connexion ou ressayer!!"
              );
              console.log(error);
            }
          }}>ajouter un fichier</Button
        >
      </div>
    </header>
    <div class=" flex flex-col gap-4 p-4 pt-4 justify-center">
      <div class=" gap-2 rounded">
        {#if files.error}
          <p>oups</p>
        {:else if files.loading}
          <p>loading...</p>
        {:else}
          {#each files.current as file}
            <div
              class="bg-gray-200 rounded-xl text-1xl mb-2 p-5 grid flex-1 text-left text-sm leading-tight"
            >
              <span class="truncate font-medium">titre: {file.title}</span>
              <span class="truncate text-xs">status: {file.status}</span>
              <span class="truncate text-xs">pages: {file.pages}</span>
              <span class="truncate text-xs">type: {file.type}</span>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>
