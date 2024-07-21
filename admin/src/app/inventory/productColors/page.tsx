import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  BadgePlus,
  FileSpreadsheet,
  Filter,
  MoreHorizontal,
  SlidersHorizontal,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Boxes, Diamond, Warehouse } from "lucide-react";
import TestRadarChart from "@/components/charts/inventory/productColor/TestRadarChart";
import { Input } from "@/components/ui/input";

async function fetchProductColors() {
  const response = await fetch("http://localhost:5000/api/v1/proColor", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function ProductColors() {
  const data = await fetchProductColors();
  const productColorData = data["color"];

  return (
    <main>
      <div className="mb-5">
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Warehouse size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/inventory">
                <Boxes size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Product Colors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <TestRadarChart />
        </div>
        <div className="col-span-2">
          <div className="flex justify-end gap-2 mb-4">
            <Input
              className="mt-0.5 h-8"
              placeholder="Filter by color name..."
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" className="mt-0.5 h-8">
                  <Filter size={16} />
                  <span className="ml-1">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Color</DropdownMenuItem>
                <DropdownMenuItem>HexCode</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" variant="outline" className="mt-0.5 h-8">
              <FileSpreadsheet size={16} />
              <span className="ml-1">Export</span>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <BadgePlus size={16} />
                  <span className="ml-1">Add color</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Colors</CardTitle>
              <CardDescription>Manage your product colors.</CardDescription>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Color</span>
                    </TableHead>
                    <TableHead>Color Name</TableHead>
                    <TableHead>Hex Code</TableHead>

                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productColorData.map((colorData: any) => (
                    <TableRow key={colorData.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar
                          style={{ backgroundColor: colorData.hexCode }}
                        ></Avatar>
                      </TableCell>
                      <TableCell className="italic">
                        {colorData.colorName}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {colorData.hexCode}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-10</strong> of
                <strong>{productColorData.length}</strong> colors
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
