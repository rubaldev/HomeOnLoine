<script>
  import { cn } from "$lib/utils.js";
  // adapte selon ton chemin utils
  import { enhance } from "$app/forms";
  import Button from "$lib/components/ui/button/button.svelte";
  import CardContent from "$lib/components/ui/card/card-content.svelte";
  import CardDescription from "$lib/components/ui/card/card-description.svelte";
  import CardHeader from "$lib/components/ui/card/card-header.svelte";
  import CardTitle from "$lib/components/ui/card/card-title.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { toast } from "svelte-sonner";
  import { superForm } from "sveltekit-superforms";

  let { props, className, data } = $props();
  const { form, errors, constraints, message } = superForm(data.form);
</script>

{#if $message}
  {(() => toast($message))()}
{:else}
  {(() => toast("inscription echouée!"))()}
{/if}
<div class={cn("flex flex-col gap-6", className)} {...props}>
  <Card class="border-none shadow-5">
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form method="POST" use:enhance {...signup}>
        <div class="flex flex-col gap-6">
          <div class="grid gap-3">
            <Label for="nom">Nom</Label>
            <Input
              id="nom"
              type="text"
              name="nom"
              placeholder="Votre Nom"
              required
              bind:value={$form.nom}
              aria-invalid={$errors.nom ? "true" : undefined}
              {...$constraints.nom}
            />
            {#if $errors.nom}<span class="invalid">{$errors.nom}</span>{/if}
            <Label for="prenom">Prenom</Label>
            <Input
              id="prenom"
              type="text"
              name="prenom"
              placeholder="votre prenom"
              required
              bind:value={$form.prenom}
              aria-invalid={$errors.prenom ? "true" : undefined}
              {...$constraints.prenom}
            />
            {#if $errors.prenom}<span class="invalid">{$errors.prenom}</span
              >{/if}
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
              bind:value={$form.email}
              aria-invalid={$errors.email ? "true" : undefined}
              {...$constraints.email}
            />
            {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
          </div>
          <div class="grid gap-3">
            <div class="flex items-center">
              <Label for="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              required
              bind:value={$form.password}
              aria-invalid={$errors.password ? "true" : undefined}
              {...$constraints.password}
            />
            {#if $errors.password}<span class="invalid">{$errors.password}</span
              >{/if}
          </div>
          <div class="flex flex-col gap-3">
            <Button type="submit" class="w-full bg-neutral-900 text-neutral-50"
              >Sign Up</Button
            >
          </div>
        </div>
        <div class="mt-4 text-center text-sm">
          Have an account?{" "}
          <a href="/login" class="underline underline-offset-4">Log in</a>
        </div>
      </form>
    </CardContent>
  </Card>
</div>

<style>
  .invalid {
    color: red;
  }
</style>
