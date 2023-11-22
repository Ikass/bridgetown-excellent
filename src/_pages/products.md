---
layout: page
title: Shop
permalink: /shop/
paginate:
  collection: products
---

<div class="grid" role="list">
  <% paginator.resources.each do |product| %>
    <sl-card class="card-overview">
      <img
        slot="image"
        src="<%= product.data.product_image || 'https://placehold.co/778x438?text=Hello+Ruby' %>"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong><%= product.data.title %></strong><br />
      <%= product.data.product_description %><br />
      <small><%= product.data.category.titleize %></small>
      <div slot="footer">
        <sl-button href="<%= product.relative_url %>" variant="warning">More Info</sl-button>
        <sl-rating></sl-rating>
      </div>
    </sl-card>
  <% end %>
</div>

<% if paginator.total_pages > 1 %>

  <ul class="pagination">
    <% if paginator.previous_page %>
    <li>
      <a href="<%= paginator.previous_page_path %>">Previous Page</a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li>
      <a href="<%= paginator.next_page_path %>">Next Page</a>
    </li>
    <% end %>
  </ul>
<% end %>
