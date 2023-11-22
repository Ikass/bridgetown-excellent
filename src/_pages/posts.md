---
layout: page
title: Posts
page_class: posts
paginate:
  collection: posts
  per_page: 4
---

<div class="grid blog" role="list" data-layout='50-50'>
  <% paginator.resources.each do |post| %>
    <sl-card class="card-overview">
      <img
        slot="image"
        src="<%= post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby' %>"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <h2><%= post.data.title %></h2><br />
      <%= post.data.description %><br />
      <small><%= date_to_string post.data.date, "ordinal" %></small>
      <div slot="footer">
        <sl-button href="<%= post.relative_url %>" variant="warning">Read More</sl-button>
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
